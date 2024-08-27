import { createSlice } from '@reduxjs/toolkit';

const peopleListSlice = createSlice({
    name: "peopleList",
    initialState: {
        people: [],
        status: "initial",
    },
    reducers: {
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
    setPeopleList,
    setStatus,
    setError,
} = peopleListSlice.actions;

const selectPeopleListState = (state) => state.peopleList;

export const selectPeopleListStatus = (state) => selectPeopleListState(state).status;
export const selectPeopleList = (state) => selectPeopleListState(state).people;

export default peopleListSlice.reducer;