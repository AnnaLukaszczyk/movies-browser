import { call, delay, put, select, takeEvery } from "redux-saga/effects";
import { getPopularPeople } from "../../../API/getPopularPeople";
import { pageNumberFromURL, selectPeopleListPage, setError, setPeopleList } from "./peopleListSlice";

function* fetchPeopleHandler() {
    try {
        yield delay(1000);
        const page = yield select(selectPeopleListPage);
        const peopleListData = yield call(getPopularPeople, page);
        yield put(setPeopleList(peopleListData));
    } catch (error) {
        yield put(setError());
    }
}

export function* peopleListSaga() {
    yield takeEvery(pageNumberFromURL, fetchPeopleHandler);
}