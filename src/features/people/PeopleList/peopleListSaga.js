import { call, put, takeEvery } from "redux-saga/effects";
import { getPopularPeople } from "../../../API/getPopularPeople";
import { setPeopleList, setStatus } from "./peopleListSlice";

function* fetchPeopleHandler() {
    try {
        const peopleListData = yield call(getPopularPeople);
        yield put(setPeopleList(peopleListData));
    } catch (error) {
        yield call(alert, "Coś poszło nie tak");
    }
}

export function* peopleListSaga() {
    yield takeEvery(setStatus.type, fetchPeopleHandler);
}
