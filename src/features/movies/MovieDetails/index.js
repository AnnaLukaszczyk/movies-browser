import { Rating } from "../../../common/Rating";
import {
	BackgroundImage,
	Header,
	Title,
	TitleContainer,
	Vignette,
	Section,
	List,
} from "./styled";
import { SectionTitle } from "../../../common/Section";
import { MovieDetailsTile, PeopleTile } from "../../../common/Tile";
import { StyledMain as Main } from "../../../common/Main/styled";
import { ListItem, StyledLink } from "../../people/PeopleList/styled";
import { toPeopleDetails } from "../../../core/routes";
import { useLocation, useParams } from "react-router-dom/cjs/react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectMovie, selectMovieCast, selectMovieCrew, setMovieId } from "./movieSlice";
import { useMediaQuery } from "react-responsive";

export const MovieDetails = () => {

	const params = useParams();
	const dispatch = useDispatch();
	const location = useLocation();
	const isLargeScreen = useMediaQuery({ query: "(min-width: 993px)" });

	useEffect(() => {
		dispatch(setMovieId(params.id))
	}, [location.pathname]);

	const movie = useSelector(selectMovie);
	const cast = useSelector(selectMovieCast);
	const crew = useSelector(selectMovieCrew);

	return (
		<>
			<Header>
				<BackgroundImage
					poster={movie.backdrop}>
					<Vignette />
					<TitleContainer>
						<Title>{movie.title}</Title>
						<Rating
							isOnMoviePhoto
							ratingValue={movie.rating}
							voteAmount={movie.voteCount}
						/>
					</TitleContainer>
				</BackgroundImage>
			</Header>
			<Main>
				<MovieDetailsTile
					poster={movie.poster}
					ratingValue={movie.rating}
					voteAmount={movie.voteCount}
					title={movie.title}
					year={movie.releaseYear}
					production={movie.production}
					date={movie.releaseDate}
					tags={movie.genres}
					description={movie.description}
				/>
				<Section>
					<SectionTitle>Cast</SectionTitle>
					{cast && (
						<List>
							{cast.map(({ id, name, character, profile_path }) => (
								<StyledLink to={toPeopleDetails()}>
									<ListItem key={id}>
										<PeopleTile
											profilePath={profile_path}
											name={name}
											character={character} />
									</ListItem>
								</StyledLink>
							))}
						</List>
					)}
				</Section>
				<Section>
					<SectionTitle>Crew</SectionTitle>
					{crew && (
						<List>
							{crew.map(({ id, name, profile_path, job }) => (
								<StyledLink to={toPeopleDetails()}>
									<ListItem key={id}>
										<PeopleTile
											profilePath={profile_path}
											name={name}
											role={job} />
									</ListItem>
								</StyledLink>
							))}
						</List>
					)}
				</Section>
			</Main>
		</>
	);
};
