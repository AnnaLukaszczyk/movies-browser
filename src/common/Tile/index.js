import { Tile, Image, Content, Title, Year, Tags, Tag } from "./styled";
import poster from "../images/poster.png";

export const TileLarge = ({ title, year, tag }) => (
	<Tile>
		<Image src={poster} alt="" />
		<Content>
			<Title>{title}</Title>
			<Year>{year}</Year>
			<Tags>
				<Tag>{tag}</Tag>
				<Tag>{tag}</Tag>
				<Tag>{tag}</Tag>
			</Tags>
		</Content>
	</Tile>
);

export const TileSmall = () => {};
