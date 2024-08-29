import { createSlice } from '@reduxjs/toolkit';

import { paginationActions } from '../../../common/Pagination/createPaginationActions';

const { paginationReducers } = paginationActions("peopleListSLice");

const peopleListSlice = createSlice({
    name: "peopleList",
    initialState: {
        page: undefined,
        people: [],
        status: "initial",
    },
    reducers: {
        ...paginationReducers,
        setStatus: (state) => {
            state.status = "loading";
        },
        setPeopleList: (state, { payload: people }) => {
            state.status = "success";
            state.people = people;
        },
        setError: (state) => {
            state.status = "error";
        },
    },
});

export const {
    pageNumberFromURL,
    setPeopleList,
    setStatus,
    setError,
} = peopleListSlice.actions;

const selectPeopleListState = (state) => state.peopleList;

export const selectPeopleListStatus = (state) => selectPeopleListState(state).status;
export const selectPeopleListPage = (state) => selectPeopleListState(state).page;
export const selectPeopleList = (state) => selectPeopleListState(state).people;

export default peopleListSlice.reducer;