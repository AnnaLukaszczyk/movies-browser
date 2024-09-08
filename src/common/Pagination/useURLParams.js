import { useDispatch } from "react-redux"
import { pageNumberFromURL as moviePageNumberFromURL } from "../../features/movies/MovieList/movieListSlice"
import { pageNumberFromURL as peoplePageNumberFromURL } from "../../features/people/PeopleList/peopleListSlice";
import { pageNumberFromURL } from "../Navigation/SearchBar/searchSlice";
import moviesPathName from "../../moviesPathName";
import peoplePathName from "../../peoplePathName";

export const useUpdatePageFromURL = () => {

    const dispatch = useDispatch();
    return ({ key, value }) => {

        if (key === moviesPathName) {
            dispatch(moviePageNumberFromURL(value))
        }

        if (key === peoplePathName) {
            dispatch(peoplePageNumberFromURL(value))
        }
        if (key === "search") {
            dispatch(pageNumberFromURL(value))
        }
    }
};