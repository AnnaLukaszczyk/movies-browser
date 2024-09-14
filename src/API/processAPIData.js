import moviesPathName from "../moviesPathName";
import peoplePathName from "../peoplePathName";
import { backdropURL, posterURL } from "./APIdata";

const nameGenres = (genreIds, genres) => {
	return (genreIds || []).map(
		(id) => genres.find((genre) => genre.id === id).name
	);
};

const changeDateFormat = (releaseDate) => {
	const date = new Date(releaseDate);

	return date.getFullYear();
};

const changeVoteFormat = (voteAverage) => {
	const roundedVote = voteAverage.toFixed(1).replace(".",",");

	return roundedVote;
};

const getCountryName = (countries) =>
	countries.map((country) => country.name).join(", ");

const getShortCountryName = (countries) =>
	countries.map((country) => country.iso_3166_1).join(", ");

const getGenreName = (genres) => genres.map(({ name }) => name);

export const processMovieListData = (movieListData, genreList) => {
	const genres = genreList.genres;
	const movieList = movieListData.results;

	return movieList.map((movie) => ({
		id: movie.id,
		title: movie.title,
		date: changeDateFormat(movie.release_date),
		rating: changeVoteFormat(movie.vote_average),
		vote_count: movie.vote_count,
		namedGenres: nameGenres(movie.genre_ids, genres),
		poster: movie.poster_path ? `${posterURL}${movie.poster_path}` : null,
	}));
};

export const processMovieDetailsData = (movieDetails) => {
	return {
		id: movieDetails.id,
		title: movieDetails.title,
		releaseDate: movieDetails.release_date,
		releaseYear: changeDateFormat(movieDetails.release_date),
		rating: changeVoteFormat(movieDetails.vote_average),
		voteCount: movieDetails.vote_count,
		description: movieDetails.overview,
		production: getCountryName(movieDetails.production_countries),
		productionShort: getShortCountryName(movieDetails.production_countries),
		genres: getGenreName(movieDetails.genres),
		backdrop: movieDetails.backdrop_path ? `${backdropURL}${movieDetails.backdrop_path}` : null,
		poster: movieDetails.poster_path ? `${posterURL}${movieDetails.poster_path}` : null,
	};
};

export const processSearchResults = (rawResults, rawGenreList, path) => {
	switch (path) {
		case moviesPathName:
			return processMovieListData(rawResults, rawGenreList);
		case peoplePathName:
			return rawResults.results;
		default:
			return {};
	}
};

export const processPeopleCastMoviesData = (castMovies, genreList) => {
	const genres = genreList.genres;

	return castMovies.map((movie) => ({
		id: movie.id,
		title: movie.title,
		date: changeDateFormat(movie.release_date),
		rating: changeVoteFormat(movie.vote_average),
		vote_count: movie.vote_count,
		release_date: movie.release_date,
		namedGenres: nameGenres(movie.genre_ids, genres),
		poster: movie.poster_path ? `${posterURL}${movie.poster_path}` : null,
	}));
};

export const processPeopleCrewMoviesData = (crewMovies, genreList) => {
	const genres = genreList.genres;

	return crewMovies.map((movie) => ({
		id: movie.id,
		title: movie.title,
		date: changeDateFormat(movie.release_date),
		rating: changeVoteFormat(movie.vote_average),
		vote_count: movie.vote_count,
		release_date: movie.release_date,
		namedGenres: nameGenres(movie.genre_ids, genres),
		poster: movie.poster_path ? `${posterURL}${movie.poster_path}` : null,
	}));
};
