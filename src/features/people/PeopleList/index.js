import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyledMain as Main } from "../../../common/Main/styled";
import { Section, SectionTitle } from "../../../common/Section";
import { Pagination } from "../../../common/Pagination";
import { PeopleTile } from "../../../common/Tile";
import { toPeopleDetails } from "../../../core/routes";
import { List, ListItem, StyledLink } from "./styled";
import {
	selectPeopleList,
	selectPeopleListStatus,
	setStatus,
} from "./peopleListSlice";
import { Loading } from "../../../common/Loading";
import { Error } from "../../../common/Error";

export const PeopleList = () => {
	const dispatch = useDispatch();
	const people = useSelector(selectPeopleList);
	const status = useSelector(selectPeopleListStatus);

	useEffect(() => {
		dispatch(setStatus());
	}, [dispatch]);

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
