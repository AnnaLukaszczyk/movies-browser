import { all } from "redux-saga/effects";
import { movieListSaga } from "../features/movies/MovieList/movieListSaga";
import { peopleListSaga } from "../features/people/PeopleList/peopleListSaga";
import { movieSaga } from "../features/movies/MovieDetails/movieSaga";
import { peopleSaga } from "../features/people/PeopleDetails/peopleSaga"


export default function* rootSaga() {
    yield all([
        movieListSaga(),
        peopleListSaga(),
        movieSaga(),
        peopleSaga(),
    ]);
};