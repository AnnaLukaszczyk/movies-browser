import { all, call, delay, put, select, takeEvery } from "redux-saga/effects";
import { getPopularMovies } from "../../../API/getPopularMovies";
import { pageNumberFromURL, selectMovieListPage, setError, setGenres, setMovieList, setStatus } from "./movieListSlice";
import { getGenres } from "../../../API/getGenres";
import { processMovieListData } from "../../../API/processAPIData";

function* fetchMovieHandler() {
    try {
        yield delay(1000);
        const page = yield select(selectMovieListPage)
        const [movieListData, genreList] = yield all([
            call(getPopularMovies, page),
            call(getGenres)
        ]);
        const processedMovieList = yield call(processMovieListData, movieListData, genreList);
        yield all([
            put(setMovieList(processedMovieList)),
            put(setGenres(genreList))
        ]);
    } catch (error) {
        yield put(setError());
    }
}

export function* movieListSaga() {
    yield takeEvery(pageNumberFromURL, fetchMovieHandler);
}
