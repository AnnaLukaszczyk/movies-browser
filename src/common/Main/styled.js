import styled from "styled-components";

export const StyledMain = styled.main`
	max-width: 1368px;
	margin: 56px auto;

	@media(max-width: ${({ theme }) => theme.breakpoints.desktopLarge}px) { 
        margin: 56px 4%;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileLarge}px) {
        margin: 56px 5%
	}

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileSmall}px) { 
        margin: 24px 16px;
    }
`;