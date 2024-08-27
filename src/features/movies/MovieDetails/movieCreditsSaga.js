import { call, put, takeEvery } from "redux-saga/effects";
import { getMovieCredits } from "../../../API/getMovieCredits";
import { setMovieCredits, setStatus } from "./movieCreditsSlice";

function* fetchCreditsHandler() {
    try {
        const movieCreditsData = yield call(getMovieCredits);
        yield put(setMovieCredits(movieCreditsData));
    } catch (error) {
        yield call(alert, "Coś poszło nie tak");
    }
}

export function* movieCreditsSaga() {
    yield takeEvery(setStatus.type, fetchCreditsHandler);
}
