import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from "./rootSaga";
import movieListReducer from "../features/movies/MovieList/movieListSlice";
import peopleListReducer from '../features/people/PeopleList/peopleListSlice';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        movieList: movieListReducer,
        peopleList: peopleListReducer,
       
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
