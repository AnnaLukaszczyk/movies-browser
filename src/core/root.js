import { all } from "redux-saga/effects";
import { movieListSaga } from "../features/movies/MovieList/movieListSaga";

export default function* rootSaga() {
    yield all([
        movieListSaga(),
    ]);
};
