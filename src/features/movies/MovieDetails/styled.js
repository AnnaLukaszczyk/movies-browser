import styled from "styled-components";
import poster from "../../../common/images/Poster_background.png";
import { ReactComponent as VignetteSVG } from "../../../common/images/Vignette.svg";

export const Header = styled.div`
    background-color: black;
`;

export const BackgroundImage = styled.div`
    
    background-image: url(${poster}) ;
    position: relative;
	margin: auto;
	max-width: 1920px;
	aspect-ratio: 5/2;
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
    margin: 0 0 3% 15%;
    `;

export const Title = styled.h1`
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

