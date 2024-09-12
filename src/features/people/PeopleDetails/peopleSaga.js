import { call, put, takeEvery, delay, select, all } from "redux-saga/effects";
import {
	setPeopleId,
	setPeopleDetails,
	setPeopleCastMovies,
	setPeopleCrewMovies,
	setGenres,
	selectPeopleId,
	setError,
} from "./peopleSlice";
import { getPeopleDetails } from "../../../API/getPeopleDetails";
import { getPeopleCastMovies } from "../../../API/getPeopleCastMovies";
import { getPeopleCrewMovies } from "../../../API/getPeopleCrewMovies";
import { getGenres } from "../../../API/getGenres";
import {
	processPeopleCastMoviesData,
	processPeopleCrewMoviesData,
} from "../../../API/processAPIData";

function* fetchPeopleHandler() {
	try {
		yield delay(1000);
		const personId = yield select(selectPeopleId);
		const [details, castMovies, crewMovies, genreList] = yield all([
			call(getPeopleDetails, personId),
			call(getPeopleCastMovies, personId),
			call(getPeopleCrewMovies, personId),
			call(getGenres),
		]);

		// Przetwarzamy dane filmów
		const processedCastMovies = yield call(
			processPeopleCastMoviesData,
			castMovies,
			genreList
		);
		const processedCrewMovies = yield call(
			processPeopleCrewMoviesData,
			crewMovies,
			genreList
		);

		yield all([
			put(setPeopleDetails(details)),
			put(setPeopleCastMovies(processedCastMovies)), // Ustawienie przetworzonych danych
			put(setPeopleCrewMovies(processedCrewMovies)), // Ustawienie przetworzonych danych
			put(setGenres(genreList)),
		]);
	} catch (error) {
		yield put(setError());
	}
}

export function* peopleSaga() {
	yield takeEvery(setPeopleId.type, fetchPeopleHandler);
}
