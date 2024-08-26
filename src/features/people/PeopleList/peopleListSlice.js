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
    },
});

export const {
    setPeopleList,
    setStatus,
} = peopleListSlice.actions;

const selectPeopleListState = (state) => state.peopleList;

export const selectPeopleList = (state) => selectPeopleListState(state).people;

export default peopleListSlice.reducer;
