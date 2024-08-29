import { useDispatch } from "react-redux"
import { pageNumberFromURL as moviePageNumberFromURL } from "../../features/movies/MovieList/movieListSlice"
import { pageNumberFromURL as peoplePageNumberFromURL } from "../../features/people/PeopleList/peopleListSlice";

export const useUpdatePageFromURL = () => {

    const dispatch = useDispatch();
    return ({ key, value }) => {
        
        if (key === "movies") {
            dispatch(moviePageNumberFromURL(value))
        }

        if( key === "people") {
            dispatch(peoplePageNumberFromURL(value))
        }
    }
};