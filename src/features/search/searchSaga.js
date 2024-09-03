import { all, call, delay, put, select, takeLatest } from "redux-saga/effects";
import { pageNumberFromURL, selectInputValue, selectPage, selectPath, setData, setInputValue, setPath, setTotalPages, setTotalResult } from "./searchSlice";

function* fetchDataHandler() {
    try {
        yield delay(120);
        const [inputValue, path, page] = yield all([
            select(selectInputValue),
            select(selectPath),
            select(selectPage),
        ]);
       
        if (query !== null) {
            const searchResults =
            yield call(getSearch, inputValue, path, page);

            yield put(setData(searchResults));
            yield put(setTotalResult(searchResults));
            yield put(setTotalPages(searchResults));

        }

    } catch (error) {
    };
};

export function* searchSaga() {
    yield takeLatest([setInputValue, pageNumberFromURL], fetchDataHandler);
};

