import { all } from "redux-saga/effects";
import { movieListSaga } from "../features/movies/MovieList/movieListSaga";
import { peopleListSaga } from "../features/people/PeopleList/peopleListSaga";
import { movieCreditsSaga } from "../features/movies/MovieDetails/movieCreditsSaga";

export default function* rootSaga() {
    yield all([
        movieListSaga(),
        peopleListSaga(),
        movieCreditsSaga()
    ]);
};