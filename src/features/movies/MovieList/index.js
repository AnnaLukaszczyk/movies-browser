import { Section, SectionTitle } from "../../../common/Section"
import { TileLarge } from "../../../common/Tile";
import { List, ListItem } from "./styled";

export const MovieList = () => {
	return (
		<Section>
			<SectionTitle>Popular movies</SectionTitle>
			<List>
				<ListItem>
					<TileLarge
						ratingValue="8.1"
						voteAmount="2000"
						title="Mulan"
						year="2020"
						tag="Action"
					/>
				</ListItem>
			</List>
		</Section>
	)
};

