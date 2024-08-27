import { createSlice } from '@reduxjs/toolkit';

const movieListSlice = createSlice({
    name: "movieList",
    initialState: {
        movies: [],
        genres: [],
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
        setGenres: (state, { payload: genres }) => {
            state.status = "success";
            state.genres = genres;
        },
        setError: (state) => {
            state.status = "error";
        },
    },
});

export const {
    setMovieList,
    setStatus,
    setGenres,
    setError,
} = movieListSlice.actions;

const selectMovieListState = (state) => state.movieList;

export const selectMovieListStatus = (state) => selectMovieListState(state).status;
export const selectMovieList = (state) => selectMovieListState(state).movies;

export const selectGenres = (state) => selectMovieListState(state).genres;

export default movieListSlice.reducer;
