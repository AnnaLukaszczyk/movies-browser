import { select, call, put, delay, takeEvery, all } from "redux-saga/effects";
import { selectMovieId, setCredits, setMovie, setMovieId, setError } from "./movieSlice";
import { getMovieDetails } from "../../../API/getMovieDetails";
import { getMovieCredits } from "../../../API/getMovieCredits";
import { processMovieDetailsData } from "../../../API/processAPIData";

function* fetchMovieHandler() {
	try {
		yield delay(1000);
		const movieId = yield select(selectMovieId);
		const [details, credits] = yield all([
			call(getMovieDetails, movieId),
			call(getMovieCredits, movieId),
		]);
		const processedMovieDetailsData = yield call(
			processMovieDetailsData,
			details
		);
		yield all([
			put(setMovie(processedMovieDetailsData)),
			put(setCredits(credits)),
		]);
	} catch (error) {
        yield put(setError());
	}
}

export function* movieSaga() {
	yield takeEvery(setMovieId.type, fetchMovieHandler);
}
