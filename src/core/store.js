import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";
import movieListReducer from "../features/movies/MovieList/movieListSlice";
import peopleListReducer from "../features/people/PeopleList/peopleListSlice";
import movieReducer from "../features/movies/MovieDetails/movieSlice";
import searchReducer from "../common/Navigation/SearchBar/searchSlice";
import peopleReducer from "../features/people/PeopleDetails/peopleSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        movieList: movieListReducer,
        peopleList: peopleListReducer,
        movie: movieReducer,
        people: peopleReducer,
        search: searchReducer,
    },
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
