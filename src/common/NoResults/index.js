import { useQueryParameter } from "../Navigation/SearchBar/useQueryParameters";
import { Section, SectionTitle } from "../Section";
import { StyledIcon } from "./styled";

export const NoResults = () => {
    const query = useQueryParameter("query");

    return (
        <Section>
            <SectionTitle>Sorry, there are no results for "{query}"</SectionTitle>
            <StyledIcon />
        </Section>
    );
};