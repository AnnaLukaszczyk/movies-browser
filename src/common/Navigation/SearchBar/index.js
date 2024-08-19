import { Wrapper, SearchInput } from "./styled";

export const SearchBar = () => (
    <Wrapper>
        <SearchInput
        placeholder={ "Search for movies..." }
        />
    </Wrapper>
);