import styled from "styled-components";
import { ReactComponent as NoPersonPhotoSVG } from "../../common/images/NoProfilePhoto.svg";
import { ReactComponent as NoPosterPhotoSVG } from "../../common/images/NoMoviePoster.svg";

export const Image = styled.img`
	width: 100%;
	height: 100%;
	border-radius: 5px;
`;

export const MovieImage = styled.img`
	width: 312px;
	margin: 0px 40px 20px 0px;
	border-radius: 5px;
	float: left;

	@media (max-width: ${({ theme }) => theme.breakpoints.desktopSmall}px) {
		margin: 0px 30px 14px 0px;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.mobileLarge}px) {
		width: 114px;
		margin: 0px 16px 16px 0px;
	}
`;

export const PersonImage = styled(MovieImage)`
	width: 399px;

	@media (max-width: ${({ theme }) => theme.breakpoints.desktopSmall}px) {
		width: 300px;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.mobileLarge}px) {
		width: 116px;
	}
`;

const Tile = styled.article`
	min-height: 100%;
	display: grid;
	grid-template-rows: auto 1fr;
	justify-content: center;
	padding: 16px;
	background: ${({ theme }) => theme.color.white};
	border-radius: 5px;
	box-shadow: 0 0 12px #bac7d580;
	transition: transform 0.3s, box-shadow 0.3s;

	&:hover {
		transform: translateY(10px);
		box-shadow: 0 0 16px #959faa;
	}

	&:hover ${Image} {
		filter: brightness(90%);
	}
`;

export const ImageContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 5px;
	overflow: hidden;
`;

export const NoPhotoBox = styled.div`
	width: 292px;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: gray;
`;

// styles for MovieTile

export const StyledMovieTile = styled(Tile)`
	grid-gap: 16px;
	max-width: 324px;

	@media (max-width: ${({ theme }) => theme.breakpoints.tabletSmall}px) {
		grid-template-columns: auto 1fr;
		max-width: 702px;
		grid-gap: 0;
	}
`;

export const MovieImageContainer = styled(ImageContainer)`
	aspect-ratio: 2 / 3;
	@media (max-width: ${({ theme }) => theme.breakpoints.tabletSmall}px) {
		width: 114px;
		height: 169px;
		aspect-ratio: calc(120 / 178);
	}
`;

export const MovieListContent = styled.div`
	max-width: 100%;
	display: flex;
	flex-direction: column;

	@media (max-width: ${({ theme }) => theme.breakpoints.tabletSmall}px) {
		margin-left: 16px;
	}
`;

export const Year = styled.p`
	margin: 8px 0;
	color: ${({ theme }) => theme.color.darkerGrey};

	@media (max-width: ${({ theme }) => theme.breakpoints.tabletSmall}px) {
		font-size: 16px;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}px) {
		font-size: 13px;
	}
`;

export const Tags = styled.ul`
	display: flex;
	flex-wrap: wrap;
	gap: 8px;
	margin-bottom: 10px;
	padding: 0;
	list-style: none;

	@media (max-width: ${({ theme }) => theme.breakpoints.tabletSmall}px) {
		margin-bottom: 8px;
	}
`;

export const Tag = styled.li`
	padding: 8px 16px;
	font-size: 14px;
	background: #e4e6f0;
	border-radius: 5px;

	@media (max-width: ${({ theme }) => theme.breakpoints.tabletSmall}px) {
		padding: 6px 12px;
		font-size: 12px;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}px) {
		padding: 4px 8px;
		font-size: 10px;
	}
`;

export const RatingContainer = styled.div`
	margin-top: auto;

	@media (max-width: ${({ theme }) => theme.breakpoints.tabletSmall}px) {
		margin-top: 0;
	}
`;

export const NoPosterPhoto = styled(NoPosterPhotoSVG)`
	width: 72px;
	height: 72px;

	@media (max-width: ${({ theme }) => theme.breakpoints.mobileLarge}px) {
		width: 48px;
		height: 48px;
	}
`;

// styles for PeopleTile

export const StyledPeopleTile = styled(Tile)`
	border-radius: 0;

	@media (max-width: ${({ theme }) => theme.breakpoints.mobileLarge}px) {
		max-width: 214px;
		padding: 8px;
	}
`;

export const PeopleImageContainer = styled(ImageContainer)`
	aspect-ratio: calc(177 / 260);
`;

export const NoProfilePhoto = styled(NoPersonPhotoSVG)`
	width: 72px;
	height: 72px;

	@media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}px) {
		width: 48px;
		height: 48px;
	}
`;

export const ActorProfile = styled.div`
	margin-top: 12px;
	text-align: center;

	@media (max-width: ${({ theme }) => theme.breakpoints.tabletSmall}px) {
		margin-top: 8px;
	}
`;

// styles for MovieTile and PeopleTile

export const Title = styled.h3`
	margin: 0;
	font-size: 22px;
	font-weight: 500;
	word-break: break-word;

	@media (max-width: ${({ theme }) => theme.breakpoints.tabletSmall}px) {
		font-size: 20px;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.mobileLarge}px) {
		font-size: 18px;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}px) {
		font-size: 16px;
	}
`;

export const Subtitle = styled.p`
	margin: 8px 0;
	font-size: 18px;
	word-break: break-word;
`;

// styles for MovieDetailsTile and PeopleDetailsTile

export const StyledDetailsTile = styled(Tile)`
	display: block;
	max-width: 1368px;
	padding: 40px 40px 20px 40px;
	border-radius: 0;

	&:hover {
		transform: none;
		box-shadow: 0 0 12px #bac7d580;
	}

	&:hover ${Image} {
		filter: none;
	}

	&::after {
		content: "";
		display: table;
		clear: both;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.mobileLarge}px) {
		display: grid;
		grid-template-columns: auto 1fr;
		padding: 16px;
	}
`;

export const NoMoviePhotoBox = styled(NoPhotoBox)`
	width: 312px;
	height: 468px;
	margin: 0px 40px 20px 0px;
	border-radius: 5px;
	float: left;

	@media (max-width: ${({ theme }) => theme.breakpoints.mobileLarge}px) {
		width: 114px;
		height: 169px;
		margin: 0px 16px 16px 0px;
	}
`;

export const NoPersonPhotoBox = styled(NoPhotoBox)`
	width: 399px;
	height: 598px;
	margin: 0px 40px 20px 0px;
	border-radius: 5px;
	float: left;

	@media (max-width: ${({ theme }) => theme.breakpoints.desktopSmall}px) {
		width: 300px;
		height: 450px;
		margin: 0px 30px 14px 0px;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.mobileLarge}px) {
		width: 116px;
		height: 174px;
		margin: 0px 16px 16px 0px;
	}
`;

export const ContentInDetailsTile = styled.div`
	margin-bottom: 24px;
`;

export const TitleInDetailsTile = styled.header`
	font-size: 36px;
	font-weight: 600;

	@media (max-width: ${({ theme }) => theme.breakpoints.tabletSmall}px) {
		font-size: 28px;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.mobileLarge}px) {
		font-weight: 500;
		font-size: 16px;
		line-height: 20.8px;
	}
`;

export const YearInDetailsTile = styled.p`
	font-size: 22px;
	margin: 24px 0 0 0;

	@media (max-width: ${({ theme }) => theme.breakpoints.tabletSmall}px) {
		font-size: 16px;
		margin: 12px 0 0 0;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.mobileLarge}px) {
		margin: 4px 0 0 0;
		color: ${({ theme }) => theme.color.waterloo};
		font-size: 13px;
	}
`;

export const BoxOnDetails = styled.div`
	margin: 24px 0 0 0;

	@media (max-width: ${({ theme }) => theme.breakpoints.tabletSmall}px) {
		margin: 8px 0 0 0;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.mobileLarge}px) {
		font-size: 12px;
		line-height: 22px;
	}
`;

export const Details = styled.div`
	display: flex;
	flex-wrap: wrap;
	line-height: 20px;
	margin: 8px 0;

	@media (max-width: ${({ theme }) => theme.breakpoints.mobileLarge}px) {
		margin: 0;
	}
`;

export const DetailPeopleName = styled.p`
	margin: 0;
	line-height: 20px;
	color: ${({ theme }) => theme.color.stormGrey};
`;

export const DetailName = styled.span`
	margin: 0;
	line-height: 20px;
	color: ${({ theme }) => theme.color.stormGrey};

	@media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}px) {
		display: none;
	}
`;

export const DetailValue = styled.span`
	margin: 0;
	font-size: 18px;
	margin-left: 6px;
	color: ${({ theme }) => theme.color.black};

	@media (max-width: ${({ theme }) => theme.breakpoints.tabletSmall}px) {
		font-size: 16px;
		margin-left: 4px;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.mobileLarge}px) {
		font-size: 12px;
		margin-left: 3px;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}px) {
		font-size: 12px;
		margin-left: 2px;
	}
`;

export const TagsInDetailsTile = styled(Tags)`
	margin: 24px 0;

	@media (max-width: ${({ theme }) => theme.breakpoints.mobileLarge}px) {
		margin: 8px 0 14px;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}px) {
		margin: 8px 0;
	}
`;

export const Description = styled.p`
	margin: 0 0 20px 0;
	font-size: 20px;
	line-height: 32px;
	text-align: justify;
	grid-column: 1 / -1;

	@media (max-width: ${({ theme }) => theme.breakpoints.desktopSmall}px) {
		font-size: 17px;
		line-height: 27px;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.mobileLarge}px) {
		margin: 0;
		font-size: 14px;
		line-height: 22px;
	}
`;
