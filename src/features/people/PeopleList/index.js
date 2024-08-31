import { useEffect } from "react";
import { useSelector } from "react-redux";
import { StyledMain as Main } from "../../../common/Main/styled";
import { Section, SectionTitle } from "../../../common/Section";
import { Pagination } from "../../../common/Pagination";
import { PeopleTile } from "../../../common/Tile";
import { toPeopleDetails } from "../../../core/routes";
import { List, ListItem, StyledLink } from "./styled";
import {
	selectPeopleList,
	selectPeopleListStatus,
} from "./peopleListSlice";
import { Loading } from "../../../common/Loading";
import { Error } from "../../../common/Error";
import pageParamName from "../../../API/pageParamName";
import { useUpdatePageFromURL } from "../../../common/Pagination/useURLParams";
import { useHistory, useLocation } from "react-router-dom/cjs/react-router-dom";

export const PeopleList = () => {
	const location = useLocation();
	const history = useHistory();
	const searchParams = new URLSearchParams(location.search);

	const people = useSelector(selectPeopleList);
	const status = useSelector(selectPeopleListStatus);

	const updatePageFromURL = useUpdatePageFromURL()

	const pageParam = searchParams.get(pageParamName);
	const URLparams = {
		key: "people",
		value: pageParam,
	};

	useEffect(() => {

		if (pageParam === null) {
			searchParams.set(pageParamName, 1);
			history.replace(`${location.pathname}?${searchParams.toString()}`);
		}

		updatePageFromURL(URLparams);

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
						<SectionTitle>Popular people</SectionTitle>
						<List>
							{people.map(({ id, profile_path, name }) => (
								<ListItem key={id}>
									<StyledLink to={toPeopleDetails({ id: id })}>
										<PeopleTile
											profilePath={profile_path}
											name={name} />
									</StyledLink>
								</ListItem>
							))}
						</List>
					</Section>
					<Pagination />
				</Main>
			);
	}
};
