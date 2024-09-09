import { Section, SectionTitle } from "../../../common/Section";
import { Pagination } from "../../../common/Pagination";
import { MovieTile } from "../../../common/Tile";
import { List, StyledLink } from "./styled";
import { toMovieDetails } from "../../../core/routes";
import { StyledMain as Main } from "../../../common/Main/styled";
import { useSelector } from "react-redux";
import { selectMovieList, selectMovieListStatus } from "./movieListSlice";
import { useEffect } from "react";
import { Loading } from "../../../common/Loading";
import { Error } from "../../../common/Error";
import { useHistory, useLocation } from "react-router-dom/cjs/react-router-dom";
import pageParamName from "../../../paginationParam";
import { useUpdatePageFromURL } from "../../../common/Pagination/useURLParams";
import { SearchPage } from "../../search";
import queryParamName from "../../../queryParamName";
import moviesPathName from "../../../moviesPathName";

export const MovieList = () => {
	const location = useLocation();
	const history = useHistory();
	const searchParams = new URLSearchParams(location.search);
	const query = searchParams.get(queryParamName);

	const movies = useSelector(selectMovieList);
	const status = useSelector(selectMovieListStatus);

	const updatePageFromURL = useUpdatePageFromURL();

	const pageParam = searchParams.get(pageParamName);
	const URLparams = {
		key: query ? "search" : moviesPathName,
		value: pageParam,
	};

	useEffect(() => {
		if (pageParam === null) {
			searchParams.set(pageParamName, 1);
			history.replace(`${location.pathname}?${searchParams.toString()}`);
		}

		updatePageFromURL(URLparams);
	}, [location]);

	if (query) {
		return <SearchPage />
	};

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
									<li key={id}>
										<StyledLink to={toMovieDetails({ id: id })}>
											<MovieTile
												poster={poster}
												ratingValue={rating}
												voteAmount={vote_count}
												title={title}
												year={date}
												tags={namedGenres}
											/>
										</StyledLink>
									</li>
								)
							)}
						</List>
					</Section>
					<Pagination />
				</Main>
			);
	}
};
