import { useSelector } from "react-redux";
import {
	selectInputValue,
	selectSearchData,
	selectSearchPath,
	selectSearchStatus,
	selectSearchTotalResults,
	selectTotalPages,
} from "../../common/Navigation/SearchBar/searchSlice";
import { SearchMovieList } from "./searchMovieListPage";
import { Loading } from "../../common/Loading";
import { NoResults } from "../../common/NoResults";
import { SearchPeopleList } from "./searchPeopleList";
import { Error } from "../../common/Error";
import moviesPathName from "../../moviesPathName";
import peoplePathName from "../../peoplePathName";
import { Section, SectionTitle } from "../../common/Section";
import { StyledMain } from "../../common/Main/styled";

export const SearchPage = () => {
	const status = useSelector(selectSearchStatus);
	const path = useSelector(selectSearchPath);
	const searchQuery = useSelector(selectInputValue);
	const searchResults = useSelector(selectSearchData);
	const searchTotalResults = useSelector(selectSearchTotalResults);
	const totalPages = useSelector(selectTotalPages);

	if (status !== "loading" && !searchResults.length) {
		return <NoResults searchQuery={searchQuery} />;
	}

	switch (status) {
		case "loading":
			return (
				<StyledMain>
					<Section>
						<SectionTitle>Search results for {`"${searchQuery}"`}</SectionTitle>
						<Loading />
					</Section>
				</StyledMain>
			);

		case "error":
			return <Error />;
		default:
			if (path === moviesPathName) {
				return (
					<SearchMovieList
						searchQuery={searchQuery}
						searchResults={searchResults}
						searchTotalResults={searchTotalResults}
						totalPages={totalPages}
					/>
				);
			}
			if (path === peoplePathName) {
				return (
					<SearchPeopleList
						searchQuery={searchQuery}
						searchResults={searchResults}
						searchTotalResults={searchTotalResults}
						totalPages={totalPages}
					/>
				);
			}
	}
};
