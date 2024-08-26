import { all, call, put, takeEvery } from "redux-saga/effects";
import { getPopularMovies } from "../../../API/getPopularMovies";
import { setGenres, setMovieList, setStatus } from "./movieListSlice";
import { getGenres } from "../../../API/getGenres";

function* fetchMovieHandler() {
    try {
        const [movieListData, genreList] = yield all([
            call(getPopularMovies),
            call(getGenres)
        ]);
        yield all([
            put(setMovieList(movieListData)),
            put(setGenres(genreList))
        ]);
    } catch (error) {
        yield call(alert, "Coś poszło nie tak");
    }
}

export function* movieListSaga() {
    yield takeEvery(setStatus.type, fetchMovieHandler);
}
