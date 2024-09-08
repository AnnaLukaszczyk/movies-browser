import { useMediaQuery } from "react-responsive"
import { StyledMain } from "../../common/Main/styled"
import { Pagination } from "../../common/Pagination"
import { Section, SectionTitle } from "../../common/Section"
import { MovieTileLarge, MovieTileSmall } from "../../common/Tile"
import { toMovieDetails } from "../../core/routes"
import { List, ListItem, StyledLink } from "../movies/MovieList/styled"
import { useSelector } from "react-redux"
import { selectSearchData } from "../../common/Navigation/SearchBar/searchSlice"


export const SearchMovieList = (
    {
        searchQuery,
        searchResults,
        searchTotalResults,
        totalPages
    }) => {

    const searchMovies = searchResults;

    const isLargeScreen = useMediaQuery({ query: "(min-width: 993px)" });



    return (
        <StyledMain>
            <Section>
                <SectionTitle>Search results for {`"${searchQuery}"(${searchTotalResults})`}</SectionTitle>
                {searchMovies && (
                    <List>
                        {searchMovies.map(
                            ({
                                title,
                                id,
                                rating,
                                vote_count,
                                date,
                                namedGenres,
                                poster,
                            }) => (
                                <ListItem key={id}>
                                    <StyledLink to={toMovieDetails({ id: id })}>
                                        {isLargeScreen ? (
                                            <MovieTileLarge
                                                poster={poster}
                                                ratingValue={rating}
                                                voteAmount={vote_count}
                                                title={title}
                                                year={date}
                                                tags={namedGenres}
                                            />
                                        ) : (
                                            <MovieTileSmall
                                                poster={poster}
                                                ratingValue={rating}
                                                voteAmount={vote_count}
                                                title={title}
                                                year={date}
                                                tags={namedGenres}
                                            />
                                        )}
                                    </StyledLink>
                                </ListItem>
                            )
                        )}
                    </List>
                )}
            </Section>
            <Pagination 
            totalPages={totalPages}/>
        </StyledMain>
    )
}