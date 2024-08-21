import styled from "styled-components";
import { ReactComponent as PictureIconSVG } from "../../icons/Picture.svg"

export const StyledIcon = styled(PictureIconSVG)`
    justify-content: center;
    position: relative;
    margin: auto;
    display: flex;
    width: 668px;
    height: auto;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileLarge}px){
        max-width: 100%;
    }
`;

export const NoResultsText = styled.p`
    font-weight: 600;
    font-size: 36px;
    margin-bottom: 40px;
    margin-left: 15px;

    @media(max-width: ${({ theme }) => theme.breakpoints.tabletSmall}px) {
        font-size: 27px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileSmall}px) {
        font-size: 18px;
        margin-bottom: 12px;
    }
`;