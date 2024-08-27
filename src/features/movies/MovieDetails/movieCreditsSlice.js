import { createSlice } from '@reduxjs/toolkit';

const movieCreditsSlice = createSlice({
    name: "movieCredits",
    initialState: {
        credits: [],
        status: "initial",
    },
    reducers: {
        setStatus: (state) => {
            state.status = "loading";
        },
        setMovieCredits: (state, { payload: credits }) => {
            state.status = "success";
            state.credits = credits;
        },
    },
});

export const {
    setMovieCredits,
    setStatus,
} = movieCreditsSlice.actions;

const selectMovieCreditsState = (state) => state.movieCredits;

export const selectMovieCredits = (state) => selectMovieCreditsState(state).credits;

export default movieCreditsSlice.reducer;
