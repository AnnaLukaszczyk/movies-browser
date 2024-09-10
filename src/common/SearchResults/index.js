import { useLocation } from "react-router-dom";
import { Section, SectionTitle } from "../Section";
import queryParamName from "../../queryParamName";

export const SearchResults = ({searchQuery, searchTotalResults}) => {
	return (
		<Section>
			<SectionTitle>Search results for {`"${searchQuery}"(${searchTotalResults})`}</SectionTitle>
		</Section>
	);
};
