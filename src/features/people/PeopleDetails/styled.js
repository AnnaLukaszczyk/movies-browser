import styled from "styled-components";
import { Section as OriginalSection } from "../../../common/Section";

export const Section = styled(OriginalSection)`
	margin-top: 64px;

	@media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}px) {
		margin-top: 24px;
	}
`;
