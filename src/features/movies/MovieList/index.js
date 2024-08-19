import { Tile } from "../../../common/Tile";
import { List, ListItem, Content } from "./styled";

export const MovieList = () => {
	return (
		<Content>
			<List>
				<ListItem>
					<Tile
						ratingValue="10"
					/>
				</ListItem>
			</List>
		</Content>
	)
};
