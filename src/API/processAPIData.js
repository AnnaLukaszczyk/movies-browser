const nameGenres = (genreIds, genres) => {
    return (
        (genreIds || []).map(
            (id) => genres.find(
                (genre) => genre.id === id).name
        )
    )
}
    ;