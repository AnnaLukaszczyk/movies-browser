import { createSlice } from "@reduxjs/toolkit";

const peopleSlice = createSlice({
	name: "people",
	initialState: {
		id: "",
		details: {},
	},
	reducers: {
		setPeopleId: (state, { payload: personId }) => {
			state.id = personId;
		},
		setPeopleDetails: (state, { payload: details }) => {
			state.details = details;
		},
	},
});

export const { setPeopleId, setPeopleDetails } = peopleSlice.actions;

export const selectPeopleState = (state) => state.people;
export const selectPeopleId = (state) => selectPeopleState(state).id;
export const selectPeopleDetails = (state) => selectPeopleState(state).details;

export default peopleSlice.reducer;
