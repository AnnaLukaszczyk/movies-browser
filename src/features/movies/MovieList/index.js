import { useMediaQuery } from "react-responsive";
import { Section, SectionTitle } from "../../../common/Section";
import { Pagination } from "../../../common/Pagination"
import { MovieTileLarge, MovieTileSmall } from "../../../common/Tile";
import { List, ListItem, StyledLink } from "./styled";
import { toMovieDetails } from "../../../core/routes";
import { StyledMain as Main } from "../../../common/Main/styled";
import { useDispatch, useSelector } from "react-redux";
import {
	pageNumberFromURL,
	selectMovieList,
	selectMovieListStatus,
	setStatus,
} from "./movieListSlice";
import { useEffect } from "react";
import { Loading } from "../../../common/Loading";
import { Error } from "../../../common/Error";
import { useHistory, useLocation } from "react-router-dom/cjs/react-router-dom";

export const MovieList = () => {
	const isLargeScreen = useMediaQuery({ query: "(min-width: 993px)" });

	const dispatch = useDispatch();
	const location = useLocation();
	const history = useHistory();
	const searchParams = new URLSearchParams(location.search);

	const pageParam = searchParams.get("page");

	const movies = useSelector(selectMovieList);
	const status = useSelector(selectMovieListStatus);

	useEffect(() => {
		dispatch(setStatus());

		if (pageParam === null) {
			searchParams.set("page", 1);
			history.push(`${location.pathname}?${searchParams.toString()}`);
		}

		dispatch(pageNumberFromURL(pageParam));

	}, [location]);

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
					</Section>
					<Pagination />
				</Main>
			);
	}
};
