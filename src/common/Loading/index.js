import { Section, SectionTitle } from "../Section";
import { BoxForSpinner, Spinner } from "./styled";

export const Loading = () => (
	<Section>
		<SectionTitle>Search results {searchParam ? ` for ${searchParam}` : "..."} </SectionTitle>
		<BoxForSpinner>
			<Spinner />
		</BoxForSpinner>
	</Section>
);
