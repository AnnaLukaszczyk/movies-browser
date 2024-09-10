import { useDispatch, useSelector } from "react-redux";
import { StyledMain as Main } from "../../../common/Main/styled";
import { Section } from "../../../common/Section";
import { PeopleDetailsTile } from "../../../common/Tile";
import { useParams } from "react-router-dom/cjs/react-router-dom";
import { selectPeopleDetails, setPeopleId } from "./peopleSlice";
import { useEffect } from "react";
import { bigProfileURL } from "../../../API/APIdata";

export const PeopleDetails = () => {
	const params = useParams();
	const dispatch = useDispatch();
	const person = useSelector(selectPeopleDetails);

	const picturePersonDetails = person.profile_path
		? `${bigProfileURL}${person.profile_path}`
		: "";

	useEffect(() => {
		dispatch(setPeopleId(params.id));
	}, [params.id, dispatch]);

	return (
		<Main>
			<Section>
				<PeopleDetailsTile
					picturePersonDetails={picturePersonDetails}
					name={person.name}
					date={
						person.birthday
							? new Date(person.birthday).toLocaleDateString()
							: "Unknown"
					}
					place={person.place_of_birth ? person.place_of_birth : "Unknown"}
					description={person.biography}
				/>
			</Section>
		</Main>
	);
};
