import { createSlice } from "@reduxjs/toolkit";
import { paginationActions } from "../../Pagination/createPaginationActions";

const { paginationReducers } = paginationActions('searchSlice');

const searchSlice = createSlice({
    name: "search",
    initialState: {
        status: "",
        path: "",
        inputValue: "",
        page: 1,
        data: [],
        totalResults: 0,
        totalPages: 0,
    },
    reducers: {
        ...paginationReducers,
        setPath: (state, { payload: path }) => {
            state.path = path;
        },
        setInputValue: (state, { payload: query }) => {
            state.inputValue = query;
        },
        setData: (state, { payload: rawResult }) => {
            state.data = rawResult;
            state.status = "success";
        },
        setTotalResult: (state, { payload: rawResult }) => {
            state.totalResults = rawResult.total_results;
        },
        setTotalPages: (state, { payload: rawResult }) => {
            state.totalPages = rawResult.total_pages;
        },
        setError: (state) => {
            state.status = "error";
        }
    }
})

export const {
    pageNumberFromURL,
    setPath,
    setInputValue,
    setData,
    setTotalResult,
    setTotalPages,
    setError
} = searchSlice.actions;

const selectSearchState = (state) => state.search;
export const selectSearchStatus = (state) => selectSearchState(state).status;
export const selectSearchPath = (state) => selectSearchState(state).path;
export const selectInputValue = (state) => selectSearchState(state).inputValue;
export const selectPage = (state) => selectSearchState(state).page;
export const selectSearchData = (state) => selectSearchState(state).data;
export const selectSearchTotalResults = (state) => selectSearchState(state).totalResults;
export const selectTotalPages = (state) => selectSearchState(state).totalPages;

export default searchSlice.reducer;
