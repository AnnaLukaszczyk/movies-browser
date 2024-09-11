import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
	name: "movie",
	initialState: {
		id: "",
		details: [],
		credits: [],
		status: "initial",
	},
	reducers: {
		setMovieId: (state, { payload: movieId }) => {
			state.id = movieId;
			state.status = "loading";
		},
		setMovie: (state, { payload: details }) => {
			state.details = details;
			state.status = "success";
		},
		setCredits: (state, { payload: credits }) => {
			state.credits = credits;
			state.status = "success";
		},
		setError: (state) => {
			state.status = "error";
		},
	},
});

export const { setMovieId, setMovie, setCredits, setError } =
	movieSlice.actions;

export const selectMovieState = (state) => state.movie;
export const selectMovieId = (state) => selectMovieState(state).id;
export const selectMovie = (state) => selectMovieState(state).details;
export const selectMovieCredits = (state) => selectMovieState(state).credits;
export const selectMovieCast = (state) => selectMovieCredits(state).cast;
export const selectMovieCrew = (state) => selectMovieCredits(state).crew;
export const selectMoviId = (state) => selectMovieCredits(state).id;
export const selectMovieStatus = (state) => selectMovieState(state).status;

export default movieSlice.reducer;
