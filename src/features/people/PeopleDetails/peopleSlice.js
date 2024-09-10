import { createSlice } from "@reduxjs/toolkit";

const peopleSlice = createSlice({
	name: "people",
	initialState: {
		id: "",
		details: {},
		castMovies: [],
		crewMovies: [],
	},
	reducers: {
		setPeopleId: (state, { payload: personId }) => {
			state.id = personId;
		},
		setPeopleDetails: (state, { payload: details }) => {
			state.details = details;
		},
		setPeopleCastMovies: (state, { payload: castMovies }) => {
			state.castMovies = castMovies;
		},
		setPeopleCrewMovies: (state, { payload: crewMovies }) => {
			state.crewMovies = crewMovies;
		},
	},
});

export const {
	setPeopleId,
	setPeopleDetails,
	setPeopleCastMovies,
	setPeopleCrewMovies,
} = peopleSlice.actions;

export const selectPeopleState = (state) => state.people;
export const selectPeopleId = (state) => selectPeopleState(state).id;
export const selectPeopleDetails = (state) => selectPeopleState(state).details;
export const selectPeopleCastMovies = (state) =>
	selectPeopleState(state).castMovies;
export const selectPeopleCrewMovies = (state) =>
	selectPeopleState(state).crewMovies;

export default peopleSlice.reducer;
