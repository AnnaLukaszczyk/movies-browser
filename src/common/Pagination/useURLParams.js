import { useDispatch } from "react-redux"
import { pageNumberFromURL as moviePageNumberFromURL } from "../../features/movies/MovieList/movieListSlice"
import { pageNumberFromURL as peoplePageNumberFromURL } from "../../features/people/PeopleList/peopleListSlice";
import { pageNumberFromURL } from "../Navigation/SearchBar/searchSlice";

export const useUpdatePageFromURL = () => {

    const dispatch = useDispatch();
    return ({ key, value }) => {

        if (key === "movies") {
            dispatch(moviePageNumberFromURL(value))
        }

        if (key === "people") {
            dispatch(peoplePageNumberFromURL(value))
        }
        if (key === "search") {
            dispatch(pageNumberFromURL(value))
        }
    }
};