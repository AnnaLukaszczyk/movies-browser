import styled, {keyframes} from "styled-components";
import { ReactComponent as SpinnerSVG } from "../../icons/spinner.svg";

const rotate = keyframes`
to {
    transform: rotate(360deg)
}`

export const BoxForSpinner = styled.div`
	text-align: center;
`;

export const Spinner = styled(SpinnerSVG)`
	margin: 120px auto 0;
    animation: ${rotate} 1s linear infinite;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}px) {
        margin: 24px auto 0;
        width: 35px;
        height: 35px;
    }
`;