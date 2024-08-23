import styled from "styled-components";

export const Section = styled.section`
	margin: 0;
`;

export const SectionTitle = styled.h2`
	margin: 0;
	font-size: 36px;
	font-weight: 600;

	@media (max-width: ${({ theme }) => theme.breakpoints.tabletSmall}px) {
		font-size: 28px;
	}
	
	@media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}px) {
		font-size: 18px;
	}
`;
