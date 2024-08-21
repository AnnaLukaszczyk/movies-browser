import { useQueryParameter } from "../Navigation/SearchBar/useQueryParameters";
import { Main } from "../Main";
import { NoResultsText, StyledIcon } from "./styled";

export const NoResults = () => {
    const query = useQueryParameter("query");

    return (
        <Main>
            <NoResultsText>Sorry, there are no results for "{query}"</NoResultsText>
            <StyledIcon />
        </Main>
    );
};