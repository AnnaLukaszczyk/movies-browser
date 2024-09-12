import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Loading } from "../../../common/Loading";
import { Error } from "../../../common/Error";
import { Section } from "./styled";
import { SectionTitle } from "../../../common/Section";
import { toMovieDetails } from "../../../core/routes";
import { PeopleDetailsTile, MovieTile } from "../../../common/Tile";
import { StyledMain as Main } from "../../../common/Main/styled";
import { List, StyledLink } from "../../movies/MovieList/styled";
import {
	selectPeopleDetails,
	setPeopleId,
	selectPeopleCastMovies,
	selectPeopleCrewMovies,
	selectPeopleStatus,
} from "./peopleSlice";
import { bigProfileURL } from "../../../API/APIdata";
import { useEffect } from "react";
import { SearchPage } from "../../search";
import { useQueryParameter } from "../../../common/Navigation/SearchBar/useQueryParameters";
import pageParamName from "../../../paginationParam";
import { useHistory, useLocation } from "react-router-dom/cjs/react-router-dom";

export const PeopleDetails = () => {
	const location = useLocation();
	const history = useHistory();
	const searchParams = new URLSearchParams(location.search);
	const query = useQueryParameter();
	
	const params = useParams();
	const dispatch = useDispatch();
	const person = useSelector(selectPeopleDetails);
	const castMovies = useSelector(selectPeopleCastMovies);
	const crewMovies = useSelector(selectPeopleCrewMovies);
	const status = useSelector(selectPeopleStatus);


	const picturePersonDetails = person?.profile_path
		? `${bigProfileURL}${person.profile_path}`
		: "";

	useEffect(() => {
		dispatch(setPeopleId(params.id));

		if (!query) {
			searchParams.delete(pageParamName);
			history.replace(`${location.pathname}?${searchParams.toString()}`);
		}
	}, [params.id, query]);

	if (query) {
		return <SearchPage />;
	}

	switch (status) {
		case "loading":
			return <Loading />;
		case "error":
			return <Error />;
		default:
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
								{castMovies.map(
									({
										id,
										title,
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
					)}
					{crewMovies.length > 0 && (
						<Section>
							<SectionTitle>Movies - Crew ({crewMovies.length})</SectionTitle>
							<List>
								{crewMovies.map(
									({
										id,
										title,
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
					)}
				</Main>
			);
	}
};
