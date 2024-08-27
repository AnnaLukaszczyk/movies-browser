import { call, delay, put, takeEvery } from "redux-saga/effects";
import { getPopularPeople } from "../../../API/getPopularPeople";
import { setError, setPeopleList, setStatus } from "./peopleListSlice";

function* fetchPeopleHandler() {
    try {
        yield delay(1000);
        const peopleListData = yield call(getPopularPeople);
        yield put(setPeopleList(peopleListData));
    } catch (error) {
        yield put(setError());
    }
}

export function* peopleListSaga() {
    yield takeEvery(setStatus.type, fetchPeopleHandler);
}