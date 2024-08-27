import { posterURL } from "./APIdata";

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
}

export const processMovieListData = (movieListData, genreList) => {
    const genres = genreList.genres;

    return movieListData.map((movie) => (
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