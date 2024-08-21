import styled from "styled-components";

const Tile = styled.div`
	display: grid;
	justify-content: center;
	padding: 16px;
	background: ${({ theme }) => theme.color.white};
	border-radius: 5px;
	box-shadow: 0 0 12px #bac7d580;
`;

export const StyledTileLarge = styled(Tile)`
	grid-template-rows: auto 1fr;
	max-width: 324px;
	aspect-ratio: 324 / 650;
`;

export const StyledTileSmall = styled(Tile)`
	grid-template-columns: auto 1fr;
	grid-gap: 16px;
	width: 702px;
`;

export const StyledPeopleTile = styled(Tile)`
	grid-template-rows: auto 1fr;
	max-width: 208px;
	aspect-ratio: 208 / 339;
`;

export const Image = styled.img`
	width: 100%;
	height: auto;
`;

export const Content = styled.div`
	margin-top: 16px;

	@media (max-width: ${({ theme }) => theme.breakpoints.tabletSmall}px) {
		margin-top: 0;
	}
`;

export const ActorProfile = styled.div`
	margin-top: 12px;
	text-align: center;

	@media (max-width: ${({ theme }) => theme.breakpoints.tabletSmall}px) {
		margin-top: 8px;
	}
`;

export const Title = styled.header`
	font-size: 22px;
	font-weight: 500;

	@media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}px) {
		font-size: 16px;
	}
`;

export const Subtitle = styled.p`
	font-size: 18px;
`;

export const Year = styled.p`
	margin: 8px 0;
	color: ${({ theme }) => theme.color.darkerGrey};

	@media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}px) {
		font-size: 13px;
	}
`;

export const Tags = styled.ul`
	display: flex;
	flex-wrap: wrap;
	gap: 8px;
	margin: 0;
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

	@media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}px) {
		padding: 4px 8px;
		font-size: 10px;
	}
`;
