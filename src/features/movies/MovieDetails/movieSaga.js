import { select, call, put, takeEvery, all } from "redux-saga/effects";
import { selectMovieId, setCredits, setMovie, setMovieId } from "./movieSlice";
import {getMovieDetails} from "../../../API/getMovieDetails";
import {getMovieCredits} from "../../../API/getMovieCredits";
import { processMovieDetailsData } from "../../../API/processAPIData";


function* fetchMovieHandler() {
    try {
        const movieId = yield select(selectMovieId);
        const [details, credits] = yield all([
            call(getMovieDetails, movieId),
            call(getMovieCredits, movieId),
        ]);
     const processedMovieDetailsData = yield call(processMovieDetailsData, details);
        yield all([
            put(setMovie(processedMovieDetailsData)),
            put(setCredits(credits)),
        ]);

    } catch (error) {
        console.error(error);
        yield call(alert, "Error while fetching movieDetails")
    }
}



export function* movieSaga() {
    yield takeEvery(setMovieId.type, fetchMovieHandler);
} 