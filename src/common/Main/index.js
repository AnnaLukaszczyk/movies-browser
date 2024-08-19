import styled from "styled-components";

export const Main = styled.main`
	max-width: 1368px;
	margin: auto;

	@media(max-width: ${({ theme }) => theme.breakpoints.largeDesktop}px) {
		margin: 0 56px;
	}
`;