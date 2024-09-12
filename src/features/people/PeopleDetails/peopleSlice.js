import { createSlice } from "@reduxjs/toolkit";

const peopleSlice = createSlice({
	name: "people",
	initialState: {
		id: "",
		details: {},
		castMovies: [],
		crewMovies: [],
		genres: [],
		status: "initial",
	},
	reducers: {
		setPeopleId: (state, { payload: personId }) => {
			state.id = personId;
			state.status = "loading";
		},
		setPeopleDetails: (state, { payload: details }) => {
			state.details = details;
			state.status = "success";
		},
		setPeopleCastMovies: (state, { payload: castMovies }) => {
			state.castMovies = castMovies;
			state.status = "success";
		},
		setPeopleCrewMovies: (state, { payload: crewMovies }) => {
			state.crewMovies = crewMovies;
			state.status = "success";
		},
		setGenres: (state, { payload: genres }) => {
			state.genres = genres;
			state.status = "success";
	},
		setError: (state) => {
			state.status = "error";
		},
	},
});

export const {
	setPeopleId,
	setPeopleDetails,
	setPeopleCastMovies,
	setPeopleCrewMovies,
	setGenres,
	setError,
} = peopleSlice.actions;

export const selectPeopleState = (state) => state.people;
export const selectPeopleId = (state) => selectPeopleState(state).id;
export const selectPeopleDetails = (state) => selectPeopleState(state).details;
export const selectPeopleCastMovies = (state) =>
	selectPeopleState(state).castMovies;
export const selectPeopleCrewMovies = (state) =>
	selectPeopleState(state).crewMovies;
export const selectPeopleStatus = (state) => selectPeopleState(state).status;
export const selectGenres = (state) => selectPeopleState(state).genres;

export default peopleSlice.reducer;
