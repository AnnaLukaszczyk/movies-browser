import {
	StyledMovieTile,
	Image,
	PeopleImage,
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
	StyledDetailsTile,
	DetailName,
	DetailValue,
	BoxOnDetails,
	Description,
	Details,
	NoProfilePhoto,
	TileImageContainer,
	RatingContainer,
	MovieListContent,
} from "./styled";

import picturePeopleDetails from "../images/picturePeopleDetails.png";
import { Rating } from "../Rating";
import { posterURL, profileURL } from "../../API/APIdata";

export const MovieTile = ({ ratingValue, voteAmount, title, year, tags, poster }) => {
	return (
		<StyledMovieTile>
			<TileImageContainer>
				<Image src={`${posterURL}${poster}`} alt="" />
			</TileImageContainer>
			<MovieListContent>
				<Title>{title}</Title>
				<Year>{year}</Year>
				<Tags>
					{tags.map(tag => (
						<Tag key={tag}>{tag}</Tag>
					))}
				</Tags>

				<RatingContainer>
					<Rating
						ratingValue={ratingValue}
						voteAmount={voteAmount}
					/>
				</RatingContainer>
			</MovieListContent>
		</StyledMovieTile>
	);
};

export const PeopleTile = ({ name, character, role, profilePath }) => (
	<StyledPeopleTile>
		<TileImageContainer>
			{profilePath
				?
				<PeopleImage
					src={`${profileURL}${profilePath}`}
					alt="" />
				:
				<NoProfilePhoto />
			}
		</TileImageContainer>
		<ActorProfile>
			<Title>{name}</Title>
			<Subtitle>{character}{role}</Subtitle>
		</ActorProfile>
	</StyledPeopleTile>
);

export const MovieDetailsTile = ({
	poster,
	ratingValue,
	voteAmount,
	title,
	year,
	production,
	date,
	tags,
	description,
}) => (
	<StyledDetailsTile>
		<Image src={poster} alt="" />
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
				{tags && tags.map(tag => (
					<Tag key={tag}>{tag}</Tag>
				))}
			</TagsInDetailsTile>
			<Rating
				isMovieDetails
				ratingValue={ratingValue}
				voteAmount={voteAmount}
			/>
			<Description>{description}</Description>
		</ContentInDetailsStyle>
	</StyledDetailsTile>
);

export const PeopleDetailsTile = ({
	name,
	date,
	pleace,
	description,
}) => (
	<StyledDetailsTile>
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
	</StyledDetailsTile>
);
