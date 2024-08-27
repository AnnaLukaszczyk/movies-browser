import { all, call, delay, put, takeEvery } from "redux-saga/effects";
import { getPopularMovies } from "../../../API/getPopularMovies";
import { setError, setGenres, setMovieList, setStatus } from "./movieListSlice";
import { getGenres } from "../../../API/getGenres";
import { processMovieListData } from "../../../API/processAPIData";

function* fetchMovieHandler() {
    try {
        yield delay(1000);
        const [movieListData, genreList] = yield all([
            call(getPopularMovies),
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
    yield takeEvery(setStatus.type, fetchMovieHandler);
}
