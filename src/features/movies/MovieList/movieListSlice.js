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
    },
});

export const {
    setMovieList,
    setStatus,
    setGenres,
} = movieListSlice.actions;

const selectMovieListState = (state) => state.movieList;

export const selectMovieList = (state) => selectMovieListState(state).movies;

export const selectGenres = (state) => selectMovieListState(state).genres;

export default movieListSlice.reducer;
