import { StyledMain } from "../Main/styled";
import { Section, SectionTitle } from "../Section";
import { StyledIcon } from "./styled";

export const NoResults = ({searchQuery}) => {
	return (
		<StyledMain>
			<Section>
				<SectionTitle>Sorry, there are no results for "{searchQuery}"</SectionTitle>
				<StyledIcon />
			</Section>
		</StyledMain>
	)
};
