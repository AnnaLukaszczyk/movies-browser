import { call, put, takeEvery, select } from "redux-saga/effects";
import {
	setPeopleDetails,
	selectPeopleId,
	setPeopleId,
} from "./peopleSlice";
import { getPeopleDetails } from "../../../API/getPeopleDetails";

function* fetchPeopleHandler() {
	try {
		const personId = yield select(selectPeopleId);
		const details = yield call(getPeopleDetails, personId);
		yield put(setPeopleDetails(details));
	} catch (error) {
		console.error("Error while fetching peopleDetails", error);
	}
}

export function* peopleSaga() {
	yield takeEvery(setPeopleId.type, fetchPeopleHandler);
}
