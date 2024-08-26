import { call, put, takeEvery } from "redux-saga/effects";
import { getPopularMovies } from "../../../API/getPopularMovies";

function* fetchMovieHandler() {
    try {
        const movieListData = yield call(getPopularMovies);
        yield put(setMovieList(movieListData));
    } catch (error) {
        yield call(alert, "Coś poszło nie tak");
    }
}

export function* movieListSaga() {
    yield takeEvery(setStatus.type, fetchMovieHandler);
}
