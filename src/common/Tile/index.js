import {
	StyledMovieTile,
	Image,
	PeopleImage,
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
	StyledPeopleDetailsTile,
	DetailName,
	DetailPeopleName,
	DetailValue,
	BoxOnDetails,
	Description,
	DescriptionPeople,
	Details,
	NoProfilePhoto,
	MovieImageContainer,
	PeopleImageContainer,
	RatingContainer,
	MovieListContent,
	PersonImage,
	ContentInPeopleDetailsTile,
	NoPosterPhoto,
	ImageContainer,
} from "./styled";
import { Rating } from "../Rating";
import { posterURL, profileURL } from "../../API/APIdata";
import { useScreenWidth } from "./useScreenWidth";
import { BackgroundImage } from "../../features/movies/MovieDetails/styled";

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
				<PeopleImage src={`${profileURL}${profilePath}`} alt="" />
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
			<Image src={poster} alt="" />
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
					<DetailValue> {isLargeScreen ? production : productionShort}</DetailValue>
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
			<Description>{description}</Description>
		</ContentInDetailsTile>
	</StyledDetailsTile>
	)
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
			<StyledPeopleDetailsTile>
					<PersonImage src={picturePersonDetails} alt="" />
					<ContentInPeopleDetailsTile>
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
					</ContentInPeopleDetailsTile>
							<DescriptionPeople>{description}</DescriptionPeople>
			</StyledPeopleDetailsTile>
	);
};
