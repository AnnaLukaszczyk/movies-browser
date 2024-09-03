import { createSlice } from "@reduxjs/toolkit";

import { paginationActions } from "../../common/Pagination/createPaginationActions";

const { paginationReducers } = paginationActions('searchSlice');

const searchSlice = createSlice({
    name: "search",
    initialState: {
        path: "",
        inputValue: "",
        page: 1,
       
    },
    reducers: {
        ...paginationReducers,
        setPath: (state, { payload: path }) => {
            state.path = path;
        },
        setInputValue: (state, { payload: query }) => {
            state.inputValue = query;
        },
    }
})

export const {
    pageNumberFromURL,
    setPath,
    setInputValue,
} = searchSlice.actions;

const selectSearchState = (state) => state.search;
export const selectPath = (state) => selectSearchState(state).path;
export const selectInputValue = (state) => selectSearchState(state).inputValue;
export const selectPage = (state) => selectSearchState(state).page;

export default searchSlice.reducer;
