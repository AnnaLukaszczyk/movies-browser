import styled, { css } from "styled-components";
import { ReactComponent as StarSVG } from "../images/star.svg";

export const StarIcon = styled(StarSVG)`
    width: 16px;
    height: 16px;

    ${({ $onMoviePhoto }) => $onMoviePhoto && css`
        width: 24px;
        height: 24px;
    `}
`;

export const RatingValue = styled.span`
    font-size: 16px;
    line-height: 1.5;
    font-weight: 600;
    color: ${({ theme }) => theme.color.woodsmoke};

    ${({ $onMoviePhoto }) => $onMoviePhoto && css`
    font-size:30px;
    line-height: 1.3;
    font-weight: 500;
    color: ${({ theme }) => theme.color.woodsmoke};
    `}

    ${({ $movieDetails }) => $movieDetails && css`
    font-size: 22px;
        line-height: 1.3;
        font-weight: 500;
        color: ${({ theme }) => theme.color.woodsmoke};
    `}
`;