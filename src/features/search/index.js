import { useSelector } from "react-redux"
import { selectInputValue, selectSearchData, selectSearchPath, selectSearchStatus, selectSearchTotalResults, selectTotalPages } from "../../common/Navigation/SearchBar/searchSlice";
import { SearchMovieList } from "./searchMovieListPage";
import { Loading } from "../../common/Loading";
import { NoResults } from "../../common/NoResults"
import { SearchPeopleList } from "./searchPeopleList";

export const SearchPage = () => {

    const status = useSelector(selectSearchStatus);
    const path = useSelector(selectSearchPath);
    const searchQuery = useSelector(selectInputValue);
    const searchResults = useSelector(selectSearchData);
    const searchTotalResults = useSelector(selectSearchTotalResults);
    const totalPages = useSelector(selectTotalPages);

    if (searchQuery && !searchResults.length) {
        return <NoResults searchQuery={searchQuery}/>
    };

    switch (status) {
        case "loading":
            return <Loading />

        default:
            if (path === "movies") {
                return < SearchMovieList
                    searchQuery={searchQuery}
                    searchResults={searchResults}
                    totalResults={searchTotalResults}
                />
            };
            if (path === "people") {
                return < SearchPeopleList
                    searchQuery={searchQuery}
                    searchResults={searchResults}
                    totalResults={searchTotalResults}
                />
            };
    };


};