import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Section, SectionTitle } from '../../../common/Section';
import { toMovieDetails } from "../../../core/routes";
import { PeopleDetailsTile, MovieTile } from '../../../common/Tile';
import { StyledMain as Main } from '../../../common/Main/styled';
import { List, StyledLink } from '../../movies/MovieList/styled';
import { selectPeopleDetails, setPeopleId, selectPeopleCastMovies, selectPeopleCrewMovies } from './peopleSlice';
import { bigProfileURL, posterURL } from '../../../API/APIdata';
import { useEffect, useState } from 'react';
import { getGenres } from '../../../API/getGenres';
import queryParamName from "../../../queryParamName";
import { SearchPage } from "../../search";
import { useQueryParameter } from "../../../common/Navigation/SearchBar/useQueryParameters";
import pageParamName from "../../../paginationParam";
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom';


export const PeopleDetails = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();
    const person = useSelector(selectPeopleDetails);
    const castMovies = useSelector(selectPeopleCastMovies) || [];
    const crewMovies = useSelector(selectPeopleCrewMovies) || [];

    const searchParams = new URLSearchParams(location.search);

    const query = useQueryParameter(queryParamName);


    const [genres, setGenres] = useState([]);

    const picturePersonDetails = person?.profile_path
        ? `${bigProfileURL}${person.profile_path}`
        : '';

    useEffect(() => {
        dispatch(setPeopleId(params.id));

        if (!query) {
            searchParams.delete(pageParamName)
            history.replace(`${location.pathname}?${searchParams.toString()}`);
        }

    }, [location]);

    useEffect(() => {
        const fetchGenres = async () => {
            try {
                const genreData = await getGenres();
                setGenres(genreData.genres);
            } catch (error) {
                console.error('Failed to fetch genres', error);
            }
        };

        fetchGenres();
    }, []);

    const safeGetGenreNames = (genreIds) => {
        if (!Array.isArray(genreIds)) {
            return [];
        }
        return genreIds.map(id => genres.find(genre => genre.id === id)?.name || 'Unknown');
    };

    if (query) {
        return <SearchPage />
    }
    return (
        <Main>
            <Section>
                <PeopleDetailsTile
                    picturePersonDetails={picturePersonDetails}
                    name={person?.name || "Unknown"}
                    date={
                        person?.birthday
                            ? new Date(person.birthday).toLocaleDateString()
                            : "Unknown"
                    }
                    place={person?.place_of_birth || "Unknown"}
                    description={person?.biography || "No biography available."}
                />
            </Section>
            {castMovies.length > 0 && (
                <Section>
                    <SectionTitle>Movies - Cast ({castMovies.length})</SectionTitle>
                    <List>
                        {castMovies.map(({ id, title, rating, vote_count, release_date, poster_path, genre_ids }) => (
                            <li key={id}>
                                <StyledLink to={toMovieDetails({ id: id })}>
                                    <MovieTile
                                        poster={poster_path ? `${posterURL}${poster_path}` : ''}
                                        ratingValue={rating}
                                        voteAmount={vote_count}
                                        title={title}
                                        year={new Date(release_date).getFullYear()}
                                        tags={safeGetGenreNames(genre_ids)}
                                    />
                                </StyledLink>
                            </li>
                        ))}
                    </List>
                </Section>
            )}
            {crewMovies.length > 0 && (
                <Section>
                    <SectionTitle>Movies - Crew ({crewMovies.length})</SectionTitle>
                    <List>
                        {crewMovies.map(({ id, title, rating, vote_count, release_date, poster_path, genre_ids }) => (
                            <li key={id}>
                                <StyledLink to={toMovieDetails({ id: id })}>
                                    <MovieTile
                                        poster={poster_path ? `${posterURL}${poster_path}` : ''}
                                        ratingValue={rating}
                                        voteAmount={vote_count}
                                        title={title}
                                        year={new Date(release_date).getFullYear()}
                                        tags={safeGetGenreNames(genre_ids)}
                                    />
                                </StyledLink>
                            </li>
                        ))}
                    </List>
                </Section>
            )}
        </Main>
    );
};
