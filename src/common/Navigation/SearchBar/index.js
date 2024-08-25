import { Wrapper, SearchInput } from "./styled";
import { useLocation } from "react-router-dom";

export const SearchBar = () => {
	const location = useLocation();
    const isMovies = location.pathname.startsWith("/movies") || location.pathname.startsWith("/movieDetails");

	return (
		<Wrapper>
			<SearchInput  placeholder={isMovies ? "Search for movies..." : "Search for people..."} />
		</Wrapper>
	);
};
