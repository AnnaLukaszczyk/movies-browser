import { Wrapper, SearchInput } from "./styled";
import { useLocation } from "react-router-dom";
import {
	useQueryParameter,
	useReplaceQueryParameter,
} from "./useQueryParameters";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setInputValue, setPath } from "./searchSlice";
import { useUpdatePageFromURL } from "../../Pagination/useURLParams";
import pageParamName from "../../../API/pageParamName";

export const SearchBar = () => {

	const dispatch = useDispatch();
	const location = useLocation();


	const isMovies =
		location.pathname.startsWith("/movies");

	const query = useQueryParameter("query");
	const pageParam = useQueryParameter(pageParamName);
	const replaceQueryParameter = useReplaceQueryParameter();
	const updatePageFromURL = useUpdatePageFromURL();

	useEffect(() => {
		const path = location.pathname.slice(1);

		const updatePath = () => {
			switch (path) {
				case "movies":
					return dispatch(setPath(path));
				case "people":
					return dispatch(setPath(path));
				default:
					return dispatch(setPath(""));
			};
		};
		updatePath();

		if (query) {
			updatePageFromURL({
				key: "search",
				value: pageParam,
			})
			dispatch(setInputValue(query));
		}



	}, [location]);


	const onInputChange = ({ target }) => {
		replaceQueryParameter({
			key: "query",
			value: target.value.trim() !== "" ? target.value : undefined,
		});
	};

	return (
		<Wrapper>
			<SearchInput
				value={query || ""}
				onChange={onInputChange}
				placeholder={isMovies ? "Search for movies..." : "Search for people..."}
			/>
		</Wrapper>
	);
};