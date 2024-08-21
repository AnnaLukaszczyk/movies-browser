import { Section, SectionTitle } from "../../../common/Section";
import { PeopleTile } from "../../../common/Tile";
import { List, ListItem, StyledLink } from "./styled"

export const PeopleList = () => (
	<Section>
		<SectionTitle>Popular people</SectionTitle>
		<List>
			<StyledLink>
				<ListItem>
					<PeopleTile name="Liu Yifei"/>
				</ListItem>
			</StyledLink>
		</List>
	</Section>
);
