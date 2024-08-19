import { TileLarge } from "../../../common/Tile";
import { List, ListItem, Content } from "./styled";

export const MovieList = () => (
	<Content>
		<List>
			<ListItem>
				<TileLarge title="Mulan" year="2020" tag="Action" />
			</ListItem>
		</List>
	</Content>
);
