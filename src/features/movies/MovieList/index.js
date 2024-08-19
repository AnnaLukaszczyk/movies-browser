import { Section, SectionTitle } from "../../../common/Section"
import { TileLarge } from "../../../common/Tile";
import { List, ListItem } from "./styled";

export const MovieList = () => (
	<Section>
		<SectionTitle>Popular movies</SectionTitle>
		<List>
			<ListItem>
				<TileLarge title="Mulan" year="2020" tag="Action" />
			</ListItem>
		</List>
	</Section>
);
