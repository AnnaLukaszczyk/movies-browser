import { useLocation } from "react-router-dom";
import { Section, SectionTitle } from "../Section";

export const SearchResults = () => {
	const location = useLocation();
	const searchParams = new URLSearchParams(location.search);
	const query = searchParams.get("query") || "";

	return (
		<Section>
			<SectionTitle>Search results for "{query}"</SectionTitle>
		</Section>
	);
};
