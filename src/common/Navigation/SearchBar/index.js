import { Wrapper, SearchInput } from "./styled";
import { useLocation } from "react-router-dom";
import {
	useQueryParameter,
	useReplaceQueryParameter,
} from "./useQueryParameters";

export const SearchBar = () => {
	const location = useLocation();
	const isMovies =
		location.pathname.startsWith("/movies");

	const query = useQueryParameter("query");
	const replaceQueryParameter = useReplaceQueryParameter();

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