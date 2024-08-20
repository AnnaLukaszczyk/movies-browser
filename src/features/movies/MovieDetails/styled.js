import styled from "styled-components";
import poster from "../../../common/images/Poster_big.png";
import { ReactComponent as VignetteSVG } from "../../../common/images/Vignette.svg";

export const Header = styled.div`
    background-color: black;
    margin:0;
`;

export const BackgroundImage = styled.div`
    background-image: url(${poster}) ;
    max-width: 1366px;
    height: 548px;
    position: relative;
    margin: auto;
    background-size: cover;
`;

export const Vignette = styled(VignetteSVG)`
    width: 100%;
    height: 100%;
`;