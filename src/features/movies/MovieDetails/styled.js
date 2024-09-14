import styled from "styled-components";
import { ReactComponent as VignetteSVG } from "../../../common/images/Vignette.svg";
import { Section as OriginalSection } from "../../../common/Section";
import { List as OriginalList } from "../../people/PeopleList/styled";

export const Header = styled.div`
	margin-bottom: 64px;
	background-color: black;

	@media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}px) {
		margin-bottom: 16px;
	}
`;

export const BackgroundImage = styled.div`
	background-image: ${({poster}) => `url(${poster})`};
	position: relative;
	margin: 0 auto;
	max-width: 1368px;
	aspect-ratio: 1.7789;
	background-repeat: no-repeat;
	background-position: center;
	background-size: contain;
`;

export const Vignette = styled(VignetteSVG)`
	position: absolute;
	height: 100%;
	width: 100%;
`;

export const TitleContainer = styled.div`
	position: absolute;
	z-index: 2;
	bottom: 0;
	margin: 0 0 3% 2%;
`;

export const Title = styled.h2`
	color: ${({ theme }) => theme.color.white};
	font-size: 64px;
	font-weight: 600;
	line-height: 120%;
	margin: 0 0 24px 0;

	@media (max-width: ${({ theme }) => theme.breakpoints.desktopLarge}px) {
		font-size: 56px;
		margin: 0 0 18px 0;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.desktopSmall}px) {
		font-size: 46px;
		margin: 0 0 14px 0;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
		font-size: 36px;
		margin: 0 0 10px 0;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.mobileLarge}px) {
		font-size: 28px;
		margin: 0 0 6px 0;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}px) {
		font-size: 24px;
		margin: 0 0 4px 0;
	}
`;

export const Section = styled(OriginalSection)`
	margin-top: 64px;

	@media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}px) {
		margin-top: 24px;
	}
`;

export const List = styled(OriginalList)`
	margin-top: 32px;

	@media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}px) {
		margin-top: 16px;
	}
`;
