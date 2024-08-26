import { useMediaQuery } from "react-responsive";
import { Section, SectionTitle } from "../../../common/Section";
import { MovieTileLarge, MovieTileSmall } from "../../../common/Tile";
import { List, ListItem, StyledLink } from "./styled";
import { toMovieDetails } from "../../../core/routes";
import { StyledMain as Main } from "../../../common/Main/styled";
import { useDispatch, useSelector } from "react-redux";
import { selectMovieList, setStatus } from "./movieListSlice";
import { useEffect } from "react";

export const MovieList = () => {
	const isLargeScreen = useMediaQuery({ query: "(min-width: 993px)" });

	const dispatch = useDispatch();
	const movies = useSelector(selectMovieList);

	useEffect(() => {
		dispatch(setStatus())
	},
		[]);

	return (
		<Main>
			<Section>
				<SectionTitle>Popular movies</SectionTitle>
				<List>
					{movies.map(({ title, id, vote_average, vote_count, release_date, genre_ids, poster_path }) => (
						<ListItem key={id}>
							<StyledLink to={toMovieDetails()}>
								{isLargeScreen ? (
									<MovieTileLarge
										poster={poster_path}
										ratingValue={vote_average}
										voteAmount={vote_count}
										title={title}
										year={release_date}
										tags={genre_ids}
									/>
								) : (
									<MovieTileSmall
										poster={poster_path}
										ratingValue={vote_average}
										voteAmount={vote_count}
										title={title}
										year={release_date}
										tags={genre_ids}
									/>
								)}
							</StyledLink>
						</ListItem>
					))}

				</List>
			</Section>
		</Main>
	);
};
