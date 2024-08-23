import { StyledMain } from "../../../common/Main/styled";
import { Section, SectionTitle } from "../../../common/Section";
import { PeopleTile } from "../../../common/Tile";
import { toPeopleDetails } from "../../../core/routes";
import { List, ListItem, StyledLink } from "./styled"

export const PeopleList = () => (
	<StyledMain>
		<Section>
			<SectionTitle>Popular people</SectionTitle>
			<List>
				<StyledLink to={toPeopleDetails()}>
					<ListItem>
						<PeopleTile name="Liu Yifei" />
					</ListItem>
				</StyledLink>
			</List>
		</Section>
	</StyledMain>
);
