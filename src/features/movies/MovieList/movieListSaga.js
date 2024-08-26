import { call, delay, put, takeEvery } from "redux-saga/effects";
import { getPopularMovies } from "../../../API/getPopularMovies";
import { setError, setMovieList, setStatus } from "./movieListSlice";

function* fetchMovieHandler() {
    try {
        yield delay(1000);
        const movieListData = yield call(getPopularMovies);
        yield put(setMovieList(movieListData));
    } catch (error) {
        yield put(setError());
    }
}

export function* movieListSaga() {
    yield takeEvery(setStatus.type, fetchMovieHandler);
}
