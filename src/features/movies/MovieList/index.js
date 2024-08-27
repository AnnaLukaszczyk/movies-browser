import { useMediaQuery } from "react-responsive";
import { Section, SectionTitle } from "../../../common/Section";
import { Pagination } from "../../../common/Pagination"
import { MovieTileLarge, MovieTileSmall } from "../../../common/Tile";
import { List, ListItem, StyledLink } from "./styled";
import { toMovieDetails } from "../../../core/routes";
import { StyledMain as Main } from "../../../common/Main/styled";
import { useDispatch, useSelector } from "react-redux";
import {
	selectMovieList,
	selectMovieListStatus,
	setStatus,
} from "./movieListSlice";
import { useEffect } from "react";
import { Loading } from "../../../common/Loading";
import { Error } from "../../../common/Error";

export const MovieList = () => {
	const isLargeScreen = useMediaQuery({ query: "(min-width: 993px)" });

	const dispatch = useDispatch();
	const movies = useSelector(selectMovieList);
	const status = useSelector(selectMovieListStatus);

	useEffect(() => {
		dispatch(setStatus());
	}, []);

	switch (status) {
		case "loading":
			return <Loading />;
		case "error":
			return <Error />;
		default:
			return (
				<Main>
					<Section>
						<SectionTitle>Popular movies</SectionTitle>
						<List>
							{movies.map(
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
										<StyledLink to={toMovieDetails()}>
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
					</Section>
					<Pagination />
				</Main>
			);
	}
};
