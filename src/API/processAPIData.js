import moviesPathName from "../moviesPathName";
import peoplePathName from "../peoplePathName";
import { backdropURL, posterURL } from "./APIdata";

const nameGenres = (genreIds, genres) => {
    return (
        (genreIds || []).map(
            (id) => genres.find(
                (genre) => genre.id === id).name
        )
    )
};

const changeDateFormat = (releaseDate) => {
    const date = new Date(releaseDate);

    return date.getFullYear();
};

const changeVoteFormat = (voteAverage) => {
    const roundedVote = voteAverage.toFixed(1);

    return roundedVote;
};

const getCountryName = (countries) =>
    countries.map(country => country.name).join(", ");

const getGenreName = (genres) =>
    genres.map(({ name }) => name);


export const processMovieListData = (movieListData, genreList) => {
    const genres = genreList.genres;
    const movieList = movieListData.results;

    return movieList.map((movie) => (
        {
            id: movie.id,
            title: movie.title,
            date: changeDateFormat(movie.release_date),
            rating: changeVoteFormat(movie.vote_average),
            vote_count: movie.vote_count,
            namedGenres: nameGenres(movie.genre_ids, genres),
            poster: `${posterURL}${movie.poster_path}`
        }
    ));
};

export const processMovieDetailsData = (movieDetails) => {
    return (
        {
            id: movieDetails.id,
            title: movieDetails.title,
            releaseDate: movieDetails.release_date,
            releaseYear: changeDateFormat(movieDetails.release_date),
            rating: changeDateFormat(movieDetails.vote_average),
            voteCount: movieDetails.vote_count,
            description: movieDetails.overview,
            production: getCountryName(movieDetails.production_countries),
            genres: getGenreName(movieDetails.genres),
            backdrop: `${backdropURL}${movieDetails.backdrop_path}`,
            poster: `${posterURL}${movieDetails.poster_path}`,
        }
    )
};

export const processSearchResults = (rawResults, rawGenreList, path) => {

    switch (path) {
        case moviesPathName:
            return processMovieListData(rawResults, rawGenreList);
        case peoplePathName:
            return rawResults.results;
        default:
            return {};
    };
};