import styled from "styled-components";
import { ReactComponent as NoPersonPhotoSVG } from "../../common/images/NoProfilePhoto.svg";

export const Image = styled.img`
	width: 100%;
	border-radius: 5px;
`;

export const TileImageContainer = styled.div`
    width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 5px;
	background: gray;
	color: white;
`;

const Tile = styled.article`
	display: grid;
	grid-template-rows: auto 1fr;
	justify-content: center;
	padding: 16px;
	background: ${({ theme }) => theme.color.white};
	border-radius: 5px;
	box-shadow: 0 0 12px #bac7d580;
	transition: transform 0.3s, box-shadow 0.3s;

	@media (max-width: ${({ theme }) => theme.breakpoints.desktopLarge}px) {
        min-height: 100%;
    }


	&:hover {
		transform: translateY(10px);
		box-shadow: 0 0 16px #959faa;
	}

	&:hover ${Image} {
		filter: brightness(90%);
	}
`;

export const StyledMovieTileLarge = styled(Tile)`
	grid-template-rows: auto 1fr;
	grid-gap: 16px;
	max-width: 324px;
`;

export const StyledMovieTileSmall = styled(Tile)`
	grid-template-columns: auto 1fr;
	grid-gap: 16px;
	max-width: 702px;
`;

export const StyledPeopleTile = styled(Tile)`
	grid-template-rows: auto 1fr;
	max-width: 208px;
	aspect-ratio: 208 / 339;
	border-radius: 0;

	@media (max-width: ${({ theme }) => theme.breakpoints.mobileLarge}px) {
		max-width: 214px;
		padding: 8px;
	}
`;

export const StyledDetailsTile = styled(Tile)`
	grid-template-columns: auto 1fr;
	grid-gap: 40px;
	max-width: 1368px;
	padding: 40px;
	border-radius: 0;

	&:hover {
		transform: none;
		box-shadow: 0 0 12px #bac7d580;
	}

	&:hover ${Image} {
		filter: none;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.tabletSmall}px) {
		grid-gap: 30px;
		padding: 24px;
	}
`;

export const MovieListContent = styled.div`
	max-width: 100%; 
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const ContentInDetailsStyle = styled.div`
	margin: 8px 0;
`;

export const ActorProfile = styled.div`
	margin-top: 12px;
	min-height: 64px;
	text-align: center;

	@media (max-width: ${({ theme }) => theme.breakpoints.tabletSmall}px) {
		margin-top: 8px;
	}
`;

export const Title = styled.h3`
	margin: 0;
	font-size: 22px;
	font-weight: 500;

	@media (max-width: ${({ theme }) => theme.breakpoints.mobileLarge}px) {
		font-size: 18px;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}px) {
		font-size: 16px;
	}
`;

export const TitleInDetailsTile = styled.header`
	font-size: 36px;
	font-weight: 600;

	@media (max-width: ${({ theme }) => theme.breakpoints.tabletSmall}px) {
		font-size: 24px;
	}
`;

export const Subtitle = styled.p`
	margin: 8px 0;
	font-size: 18px;
`;

export const Year = styled.p`
	margin: 8px 0;
	color: ${({ theme }) => theme.color.darkerGrey};

	@media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}px) {
		font-size: 13px;
	}
`;

export const YearInDetailsTile = styled.p`
	font-size: 22px;
	margin: 24px 0;

	@media (max-width: ${({ theme }) => theme.breakpoints.tabletSmall}px) {
		font-size: 16px;
		margin: 12px 0;
	}
`;

export const BoxOnDetails = styled.div`
	margin: 24px 0;

	@media (max-width: ${({ theme }) => theme.breakpoints.tabletSmall}px) {
		margin: 12px 0;
	}
`;

export const Details = styled.p`
	display: flex;
	margin: 8px 0;
	gap: 10px;
`;

export const DetailName = styled.span`
	margin: 0;
	font-size: 18px;
	color: ${({ theme }) => theme.color.stormGrey};

	@media (max-width: ${({ theme }) => theme.breakpoints.tabletSmall}px) {
		font-size: 14px;
	}
`;

export const DetailValue = styled.span`
	margin: 0;
	font-size: 18px;

	@media (max-width: ${({ theme }) => theme.breakpoints.tabletSmall}px) {
		font-size: 14px;
	}
`;

export const Tags = styled.ul`
	display: flex;
	flex-wrap: wrap;
	gap: 8px;
	padding: 0;
	list-style: none;

	@media (max-width: ${({ theme }) => theme.breakpoints.tabletSmall}px) {
		margin-bottom: 8px;
	}
`;

export const TagsInDetailsTile = styled(Tags)`
	margin-bottom: 24px;
`;

export const Tag = styled.li`
	padding: 8px 16px;
	font-size: 14px;
	background: #e4e6f0;
	border-radius: 5px;

	@media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}px) {
		padding: 4px 8px;
		font-size: 10px;
	}
`;

export const Description = styled.p`
	margin: 24px 0 0;
	font-size: 20px;
	line-height: 32px;

	@media (max-width: ${({ theme }) => theme.breakpoints.tabletSmall}px) {
		font-size: 14px;
	}
`;

export const RatingContainer = styled.div`
    margin-top: auto;
`;


export const NoProfilePhoto = styled(NoPersonPhotoSVG)`
	width: 72px;
	height: 72px;

	@media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}px) {
		width: 48px;
		height: 48px;
	}
`
