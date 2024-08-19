import { Tile } from "../../../common/Tile";
import { List, ListItem, Content } from "./styled";

export const MovieList = () => {
	return (
		<Content>
			<List>
				<ListItem>
					<Tile
						ratingValue="8.1"
						voteAmount="2000"
					/>
				</ListItem>
			</List>
		</Content>
	)
};
