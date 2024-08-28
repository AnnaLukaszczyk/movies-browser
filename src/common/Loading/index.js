import { Section } from "../Section";
import { BoxForSpinner, Spinner } from "./styled";

export const Loading = () => (
	<Section>
		<BoxForSpinner>
			<Spinner />
		</BoxForSpinner>
	</Section>
);
