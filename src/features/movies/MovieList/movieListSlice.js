import { createSlice } from '@reduxjs/toolkit';
import { paginationActions } from '../../../common/Pagination/createPaginationActions';

const { paginationReducers } = paginationActions("movieListSLice");

const movieListSlice = createSlice({
    name: "movieList",
    initialState: {
        page: undefined,
        movies: [],
        genres: [],
        status: "initial",
    },
    reducers: {
        ...paginationReducers,
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
    pageNumberFromURL,
    setMovieList,
    setStatus,
    setGenres,
    setError,
} = movieListSlice.actions;

const selectMovieListState = (state) => state.movieList;

export const selectMovieListStatus = (state) => selectMovieListState(state).status;
export const selectMovieListPage = (state) => selectMovieListState(state).page;
export const selectMovieList = (state) => selectMovieListState(state).movies;

export const selectGenres = (state) => selectMovieListState(state).genres;

export default movieListSlice.reducer;
