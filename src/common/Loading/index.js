import { Section, SectionTitle } from "../Section";
import { BoxForSpinner, Spinner } from "./styled";

export const Loading = () => (
	<Section>
		<SectionTitle>Search results for "Mulan" </SectionTitle>
		<BoxForSpinner>
			<Spinner />
		</BoxForSpinner>
	</Section>
);
