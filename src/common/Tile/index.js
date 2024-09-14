import {
	StyledMovieTile,
	Image,
	ContentInDetailsTile,
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
	DetailPeopleName,
	DetailValue,
	BoxOnDetails,
	Description,
	Details,
	NoProfilePhoto,
	MovieImageContainer,
	PeopleImageContainer,
	RatingContainer,
	MovieListContent,
	PersonImage,
	NoPosterPhoto,
	ImageContainer,
	MovieImage,
} from "./styled";
import { Rating } from "../Rating";
import { posterURL, profileURL } from "../../API/APIdata";
import { useScreenWidth } from "./useScreenWidth";

export const MovieTile = ({
	ratingValue,
	voteAmount,
	title,
	year,
	tags,
	poster,
}) => {
	return (
		<StyledMovieTile>
			<MovieImageContainer>
				{poster ? (
					<Image src={`${posterURL}${poster}`} alt="" />
				) : (
					<NoPosterPhoto />
				)}
			</MovieImageContainer>
			<MovieListContent>
				<Title>{title}</Title>
				<Year>{year ? year : ""}</Year>
				<Tags>{tags && tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}</Tags>

				<RatingContainer>
					<Rating ratingValue={ratingValue} voteAmount={voteAmount} />
				</RatingContainer>
			</MovieListContent>
		</StyledMovieTile>
	);
};

export const PeopleTile = ({ name, character, role, profilePath }) => (
	<StyledPeopleTile>
		<PeopleImageContainer>
			{profilePath ? (
				<Image src={`${profileURL}${profilePath}`} alt="" />
			) : (
				<NoProfilePhoto />
			)}
		</PeopleImageContainer>
		<ActorProfile>
			<Title>{name}</Title>
			<Subtitle>
				{character}
				{role}
			</Subtitle>
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
	productionShort,
	date,
	tags,
	description,
}) => {
	const screenWidth = useScreenWidth();
	const isLargeScreen = screenWidth >= 767;
	return (
		<StyledDetailsTile>
			{poster ? (
				<MovieImage src={poster} alt="" />
			) : (
				<ImageContainer>
					<NoPosterPhoto />
				</ImageContainer>
			)}
			<ContentInDetailsTile>
				<TitleInDetailsTile>{title}</TitleInDetailsTile>
				<YearInDetailsTile>{year ? year : ""}</YearInDetailsTile>
				<BoxOnDetails>
					<Details>
						<DetailName>Production:</DetailName>
						<DetailValue>
							{" "}
							{isLargeScreen ? production : productionShort}
						</DetailValue>
					</Details>
					<Details>
						<DetailName>Release date:</DetailName>
						<DetailValue>{date}</DetailValue>
					</Details>
				</BoxOnDetails>
				<TagsInDetailsTile>
					{tags && tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
				</TagsInDetailsTile>
				<Rating
					isMovieDetails
					ratingValue={ratingValue}
					voteAmount={voteAmount}
				/>
			</ContentInDetailsTile>
			<Description>{description}</Description>
		</StyledDetailsTile>
	);
};

export const PeopleDetailsTile = ({
	name,
	date,
	place,
	description,
	picturePersonDetails,
}) => {
	const screenWidth = useScreenWidth();
	const isLargeScreen = screenWidth >= 767;

	return (
		<StyledDetailsTile>
			<PersonImage src={picturePersonDetails} alt="" />
			<ContentInDetailsTile>
				<TitleInDetailsTile>{name}</TitleInDetailsTile>
				<BoxOnDetails>
					<Details>
						<DetailPeopleName>
							{isLargeScreen ? "Date of birth: " : "Birth: "}
							<DetailValue>{date}</DetailValue>
						</DetailPeopleName>
					</Details>
					<Details>
						<DetailPeopleName>
							Place of birth: <DetailValue>{place}</DetailValue>
						</DetailPeopleName>
					</Details>
				</BoxOnDetails>
			</ContentInDetailsTile>
			<Description>{description}</Description>
		</StyledDetailsTile>
	);
};