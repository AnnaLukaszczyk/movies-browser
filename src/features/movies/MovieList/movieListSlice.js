import { createSlice } from '@reduxjs/toolkit';

const movieListSlice = createSlice({
    name: "movieList",
    initialState: {
        movies: [],
        status: "initial",
    },
    reducers: {
        setStatus: (state) => {
            state.status = "loading";
        },
        setMovieList: (state, { payload: movies }) => {
            state.status = "success";
            state.movies = movies;
        },
    },
});

export const {
    setMovieList,
    setStatus,
} = movieListSlice.actions;

const selectMovieListState = (state) => state.movieList;

export const selectMovieList = (state) => selectMovieListState(state).movies;

export default movieListSlice.reducer;