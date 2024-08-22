import {
	StyledTileLarge,
	StyledTileSmall,
	Image,
	Content,
	ContentInDetailsStyle,
	Title,
	TitleInDetailsTile,
	Year,
	YearInDetailsTile,
	Tags,
	TagsInDetailsTile,
	Tag,
	StyledPeopleTile,
	Subtitle,
	ActorProfile,
	StyledMovieDetailsTile,
	DetailName,
	DetailValue,
	BoxOnDetails,
	Description,
	Details,
} from "./styled";
import posterLarge from "../images/posterLarge.png";
import posterSmall from "../images/posterSmall.png";
import picture from "../images/picture.png";
import posterMovieDetails from "../images/posterMovieDetails.png";
import picturePeopleDetails from "../images/picturePeopleDetails.png";
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

export const MovieDetailsTile = ({
	ratingValue,
	voteAmount,
	title,
	year,
	production,
	date,
	tag,
	description,
}) => (
	<StyledMovieDetailsTile>
		<Image src={posterMovieDetails} alt="" />
		<ContentInDetailsStyle>
			<TitleInDetailsTile>{title}</TitleInDetailsTile>
			<YearInDetailsTile>{year}</YearInDetailsTile>
			<BoxOnDetails>
				<Details>
					<DetailName>Production:</DetailName>
					<DetailValue>{production}</DetailValue>
				</Details>
				<Details>
					<DetailName>Release date:</DetailName>
					<DetailValue>{date}</DetailValue>
				</Details>
			</BoxOnDetails>
			<TagsInDetailsTile>
				<Tag>{tag}</Tag>
				<Tag>{tag}</Tag>
				<Tag>{tag}</Tag>
			</TagsInDetailsTile>

			<Rating // ten Rating ma być w kafelku z danymi filmu w MovieDetails
				isMovieDetails
				ratingValue={ratingValue}
				voteAmount={voteAmount}
			/>
			<Description>{description}</Description>
		</ContentInDetailsStyle>
	</StyledMovieDetailsTile>
);

export const PeopleDetailsTile = ({
	name,
	date,
	pleace,
	description,
}) => (
	<StyledMovieDetailsTile>
		<Image src={picturePeopleDetails} alt="" />
		<ContentInDetailsStyle>
			<TitleInDetailsTile>{name}</TitleInDetailsTile>
			<BoxOnDetails>
				<Details>
					<DetailName>Date od birth:</DetailName>
					<DetailValue>{date}</DetailValue>
				</Details>
				<Details>
					<DetailName>Pleace of birth:</DetailName>
					<DetailValue>{pleace}</DetailValue>
				</Details>
			</BoxOnDetails>
			<Description>{description}</Description>
		</ContentInDetailsStyle>
	</StyledMovieDetailsTile>
);
