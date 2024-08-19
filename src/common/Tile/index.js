import {
	StyledTileLarge,
	StyledTileSmall,
	Image,
	Content,
	Title,
	Year,
	Tags,
	Tag,
} from "./styled";
import poster from "../images/poster.png";
import { Rating } from "../Rating";

export const TileLarge = ({ ratingValue, voteAmount, title, year, tag }) => {
	return (
		<StyledTileLarge>
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
		<Image src={poster} alt="" />
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
