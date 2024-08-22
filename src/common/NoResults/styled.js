import styled from "styled-components";
import { ReactComponent as PictureIconSVG } from "../../icons/Picture.svg"

export const StyledIcon = styled(PictureIconSVG)`
    justify-content: center;
    position: relative;
    margin: 40px auto 0;
    display: flex;
    width: 668px;
    height: auto;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileLarge}px){
        margin: 0 auto;
        max-width: 100%;
    }
`;