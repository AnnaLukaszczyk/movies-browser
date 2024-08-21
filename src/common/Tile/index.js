import {
	StyledTileLarge,
	StyledTileSmall,
	Image,
	Content,
	Title,
	Year,
	Tags,
	Tag,
	StyledPeopleTile,
	Subtitle,
	ActorProfile,
} from "./styled";
import posterLarge from "../images/posterLarge.png";
import posterSmall from "../images/posterSmall.png";
import picture from "../images/picture.png";
import { Rating } from "../Rating";

export const TileLarge = ({ ratingValue, voteAmount, title, year, tag }) => {
	return (
		<StyledTileLarge>
			<Image src={posterLarge} alt="" />
			<Content>
				<Title>{title}</Title>
				<Year>{year}</Year>
				<Tags>
					<Tag>{tag}</Tag>
					<Tag>{tag}</Tag>
					<Tag>{tag}</Tag>
				</Tags>
			</Content>
			<Rating // to jest Rating dla kafelków na MovieList
				ratingValue={ratingValue}
				voteAmount={voteAmount}
			/>
			{/* <Rating // ten Rating ma być w kafelku na tle zdjęcia filmu w MovieDetails
                isOnMoviePhoto
                ratingValue={ratingValue}
                voteAmount={voteAmount}
            />
            <Rating // ten Rating ma być w kafelku z danymi filmu w MovieDetails
                isMovieDetails
                ratingValue={ratingValue}
                voteAmount={voteAmount}
            /> */}
		</StyledTileLarge>
	);
};

export const TileSmall = ({ ratingValue, voteAmount, title, year, tag }) => (
	<StyledTileSmall>
		<Image src={posterSmall} alt="" />
		<Content>
			<Title>{title}</Title>
			<Year>{year}</Year>
			<Tags>
				<Tag>{tag}</Tag>
				<Tag>{tag}</Tag>
				<Tag>{tag}</Tag>
			</Tags>

			<Rating // to jest Rating dla kafelków na MovieList
				ratingValue={ratingValue}
				voteAmount={voteAmount}
			/>
		</Content>
	</StyledTileSmall>
);

export const PeopleTile = ({ name, character }) => (
	<StyledPeopleTile>
		<Image src={picture} alt="" />
		<ActorProfile>
			<Title>{name}</Title>
			<Subtitle>{character}</Subtitle>
		</ActorProfile>
	</StyledPeopleTile>
);
