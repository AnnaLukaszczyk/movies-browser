import styled from "styled-components";

export const Main = styled.main`
	max-width: 1368px;
	margin: 56px auto;

	@media(max-width: ${({ theme }) => theme.breakpoints.desktopSmall}px) { 
        margin: 40px auto;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileLarge}px) { 
        margin: 24px auto;
    }
`;