import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movie",
    initialState: {
        id: "",
        details: [],
        credits: [],
    },
    reducers: {
        setMovieId: (state, { payload: movieId }) => {
            state.id = movieId;
        },
        setMovie: (state, { payload: details }) => {
            state.details = details;
        },
        setCredits: (state, { payload: credits }) => {
            state.credits = credits;
        },
    },
});

export const {
    setMovieId,
    setMovie,
    setCredits,
} = movieSlice.actions;

export const selectMovieState = (state) => state.movie;
export const selectMovieId = (state) => selectMovieState(state).id;
export const selectMovie = (state) => selectMovieState(state).details;
export const selectMovieCredits = (state) => selectMovieState(state).credits;
export const selectMovieCast = (state) => selectMovieCredits(state).cast;
export const selectMovieCrew = (state) => selectMovieCredits(state).crew;
export const selectMoviId = (state) => selectMovieCredits(state).id;

export default movieSlice.reducer;