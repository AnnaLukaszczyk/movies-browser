import { all, call, put, takeEvery } from "redux-saga/effects";
import { getPopularMovies } from "../../../API/getPopularMovies";
import { setGenres, setMovieList, setStatus } from "./movieListSlice";
import { getGenres } from "../../../API/getGenres";
import { processMovieListData } from "../../../API/processAPIData";

function* fetchMovieHandler() {
    try {
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
        yield call(alert, "Coś poszło nie tak");
    }
}

export function* movieListSaga() {
    yield takeEvery(setStatus.type, fetchMovieHandler);
}
