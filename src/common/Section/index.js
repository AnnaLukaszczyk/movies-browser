import styled from "styled-components";

export const Section = styled.section`
	margin: 56px 24px 0;

	@media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}px) {
		margin: 24px 16px 0;
	}
`;

export const SectionTitle = styled.h2`
	margin: 0;
	font-size: 36px;
	font-weight: 600;

	@media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}px) {
		font-size: 18px;
	}
`;
