import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyledMain as Main } from "../../../common/Main/styled";
import { Section, SectionTitle } from "../../../common/Section";
import { Pagination } from "../../../common/Pagination"
import { PeopleTile } from "../../../common/Tile";
import { toPeopleDetails } from "../../../core/routes";
import { List, ListItem, StyledLink } from "./styled";
import { selectPeopleList, setStatus } from "./peopleListSlice";

export const PeopleList = () => {
	const dispatch = useDispatch();
	const people = useSelector(selectPeopleList);

	useEffect(() => {
		dispatch(setStatus());
	}, [dispatch]);

	return (
		<Main>
			<Section>
				<SectionTitle>Popular people</SectionTitle>
				<List>
					{people.map(({ id, profile_path, name }) => (
						<ListItem key={id}>
							<StyledLink to={toPeopleDetails()}>
								<PeopleTile photo={profile_path} name={name} />
							</StyledLink>
						</ListItem>
					))}
				</List>
			</Section>
			<Pagination />
		</Main>
	);
};
