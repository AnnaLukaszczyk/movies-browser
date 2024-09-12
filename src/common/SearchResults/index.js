import { Section, SectionTitle } from "../Section";

export const SearchResults = ({searchQuery, searchTotalResults}) => {
	return (
		<Section>
			<SectionTitle>Search results for {`"${searchQuery}"(${searchTotalResults})`}</SectionTitle>
		</Section>
	);
};
