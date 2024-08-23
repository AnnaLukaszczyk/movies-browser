import styled, { css } from "styled-components";
import { ReactComponent as StarSVG } from "../../icons/star.svg";

export const RatingWrapper = styled.div`
    display: flex;
    flex-wrap: nowrap;
    gap:12px;
    align-items: center;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileLarge}px) {
		grid-gap: 4px;
        }

    ${({ $onMoviePhoto }) => $onMoviePhoto && css`
        flex-wrap: wrap;
        width: 150px;
	    height: 75px;
        gap: 8px;

        @media (max-width: ${({ theme }) => theme.breakpoints.tabletSmall}px) {
		flex-wrap: nowrap;
        width:auto;
        height:auto;
        }
	`}
`;

export const StarIcon = styled(StarSVG)`
    width: 24px;
    height: 24px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}px) {
		width: 16px;
        height:16px;
        }

    ${({ $onMoviePhoto }) => $onMoviePhoto && css`
       

        @media (min-width: ${({ theme }) => theme.breakpoints.mobileLarge}px) {
		width: 40px;
        height:40px;
        }
        
    `}
`;

export const RatingValue = styled.span`
    font-size: 16px;
    line-height: 1.5;
    font-weight: 600;
    color: ${({ theme }) => theme.color.woodsmoke};

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}px) {
		font-size:13px;
        }

    ${({ $onMoviePhoto }) => $onMoviePhoto && css`
    font-size:30px;
    line-height: 1.3;
    font-weight: 500;
    color: ${({ theme }) => theme.color.white};

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileLarge}px) {
		font-size:20px;
        }
    `}

    ${({ $movieDetails }) => $movieDetails && css`
    font-size: 22px;
        line-height: 1.3;
        font-weight: 500;
        color: ${({ theme }) => theme.color.woodsmoke};
    `}
`;

export const RatingMaxValue = styled.span`
    display: none;
    font-weight: 400;
    line-height: 1.2;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}px) {
		font-size:13px;
        }

    ${({ $onMoviePhoto }) => $onMoviePhoto && css`
        display: block;
        margin-top: 10px;
        font-size: 16px;
        color: ${({ theme }) => theme.color.white};
        
    `}

    ${({ $movieDetails }) => $movieDetails && css`
        display: block;
        margin-top: 3px;
        font-size: 14px;
        color: ${({ theme }) => theme.color.black};
    `}  
`;

export const RatingVotesAmount = styled.span`
	color: ${({ theme }) => theme.color.waterloo};
	font-size: 16px;
	font-weight: 400;
	line-height: 1.5;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}px) {
		font-size:13px;
        }

    ${({ $onMoviePhoto }) => $onMoviePhoto && css`
        font-size: 16px;
        line-height: 1.2;
        margin-top: 6px;
        color: ${({ theme }) => theme.color.white};
	`}

    ${({ $movieDetails }) => $movieDetails && css`
        margin-top: 3px;
        margin-left: 4px;
        font-size: 14px;
        line-height: 1.2;
        color: ${({ theme }) => theme.color.black};
    `}
`;