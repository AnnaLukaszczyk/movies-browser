import { useSelector } from "react-redux"
import { selectInputValue, selectSearchData, selectSearchPath, selectSearchStatus, selectSearchTotalResults, selectTotalPages } from "../../common/Navigation/SearchBar/searchSlice";
import { SearchMovieList } from "./searchMovieListPage";
import { Loading } from "../../common/Loading";
import { NoResults } from "../../common/NoResults"
import { SearchPeopleList } from "./searchPeopleList";
import { Error } from "../../common/Error";

export const SearchPage = () => {

    const status = useSelector(selectSearchStatus);
    const path = useSelector(selectSearchPath);
    const searchQuery = useSelector(selectInputValue);
    const searchResults = useSelector(selectSearchData);
    const searchTotalResults = useSelector(selectSearchTotalResults);
    const totalPages = useSelector(selectTotalPages);

    if (searchQuery && !searchResults.length) {
        return <NoResults searchQuery={searchQuery} />
    };

    switch (status) {
        case "loading":
            return <Loading />
        case "error":
            return <Error />
        default:
            if (path === "movies") {
                return < SearchMovieList
                    searchQuery={searchQuery}
                    searchResults={searchResults}
                    searchTotalResults={searchTotalResults}
                    totalPages={totalPages}
                />
            };
            if (path === "people") {
                return < SearchPeopleList
                    searchQuery={searchQuery}
                    searchResults={searchResults}
                    searchTotalResults={searchTotalResults}
                    totalPages={totalPages}
                />
            };
    };


};