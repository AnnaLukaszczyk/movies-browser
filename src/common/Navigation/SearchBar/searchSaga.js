import { all, call, delay, put, select, takeLatest } from "redux-saga/effects";
import { pageNumberFromURL, selectInputValue, selectPage, selectSearchPath, setData, setError, setInputValue, setTotalPages, setTotalResult } from "./searchSlice";
import { getSearch } from "../../../API/getSearch";
import { processSearchResults } from "../../../API/processAPIData";
import { getGenres } from "../../../API/getGenres";


function* fetchDataHandler() {
    try {
        yield delay(120);
        const [query, path, page] = yield all([
            select(selectInputValue),
            select(selectSearchPath),
            select(selectPage),
        ]);
        if (query !== null) {
            const [rawResults, rawGenreList] = yield all
                ([
                    call(getSearch, query, path, page),
                    call(getGenres),
                ])

            const searchResults = yield call
                (
                    processSearchResults,
                    rawResults,
                    rawGenreList,
                    path
                );

            yield all
                ([
                    put(setData(searchResults)),
                    put(setTotalResult(rawResults)),
                    put(setTotalPages(rawResults)),
                ]);

        }
    } catch (error) {
        yield put(setError());
    };
};

export function* searchSaga() {
    yield takeLatest([setInputValue, pageNumberFromURL], fetchDataHandler);
};
