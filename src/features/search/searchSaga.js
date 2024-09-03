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
       
    } catch (error) {
    };
};

export function* searchSaga() {
    yield takeLatest([setInputValue, pageNumberFromURL], fetchDataHandler);
};

