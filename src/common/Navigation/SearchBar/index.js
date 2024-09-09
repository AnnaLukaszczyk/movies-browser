import { Wrapper, SearchInput } from "./styled";
import { useLocation } from "react-router-dom";
import {
	useQueryParameter,
	useReplaceQueryParameter,
} from "./useQueryParameters";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setInputValue } from "./searchSlice";
import { useUpdatePageFromURL } from "../../Pagination/useURLParams";
import pageParamName from "../../../paginationParam";
import { usePathname } from "./usePathname";
import queryParamName from "../../../queryParamName";

export const SearchBar = () => {

	const dispatch = useDispatch();
	const location = useLocation();


	const isMovies =
		location.pathname.startsWith("/movies");

	const query = useQueryParameter(queryParamName);
	const pageParam = useQueryParameter(pageParamName);
	const replaceQueryParameter = useReplaceQueryParameter();
	const updatePageFromURL = useUpdatePageFromURL();
	const updatePath = usePathname();

	const URLparams = {
		key: "search",
		value: pageParam,
	};

	useEffect(() => {
		updatePath();

		if (query) {
			updatePageFromURL(URLparams);
			dispatch(setInputValue(query));
		}

	}, [location]);


	const onInputChange = ({ target }) => {
		replaceQueryParameter({
			key: queryParamName,
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