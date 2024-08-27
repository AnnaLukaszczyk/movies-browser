import { posterURL } from "./APIdata";

const nameGenres = (genreIds, genres) => {
    return (
        (genreIds || []).map(
            (id) => genres.find(
                (genre) => genre.id === id).name
        )
    )
};

export const processMovieListData = (movieListData, genreList) => {
    const genres = genreList.genres;

    return movieListData.map((movie) => (
        {
            id: movie.id,
            title: movie.title,
            date: movie.release_date,
            rating: movie.vote_average,
            vote_count: movie.vote_count,
            namedGenres: nameGenres(movie.genre_ids, genres),
            poster: `${posterURL}${movie.poster_path}`
        }
    ));
};