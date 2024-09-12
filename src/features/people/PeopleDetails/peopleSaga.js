import { call, put, takeEvery, delay, select } from "redux-saga/effects";
import {
	setPeopleDetails,
	setPeopleCastMovies,
	setPeopleCrewMovies,
	selectPeopleId,
	setPeopleId,
	setError,
} from "./peopleSlice";
import { getPeopleDetails } from "../../../API/getPeopleDetails";
import { getPeopleCastMovies } from "../../../API/getPeopleCastMovies";
import { getPeopleCrewMovies } from "../../../API/getPeopleCrewMovies";

function* fetchPeopleHandler() {
	try {
		yield delay(1000);
		const personId = yield select(selectPeopleId);
		const details = yield call(getPeopleDetails, personId);
		const castMovies = yield call(getPeopleCastMovies, personId);
		const crewMovies = yield call(getPeopleCrewMovies, personId);
		yield put(setPeopleDetails(details));
		yield put(setPeopleCastMovies(castMovies));
		yield put(setPeopleCrewMovies(crewMovies));
	} catch (error) {
		yield put(setError());
	}
}

export function* peopleSaga() {
	yield takeEvery(setPeopleId.type, fetchPeopleHandler);
}
