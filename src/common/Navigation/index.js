import { NavBar } from "./NavBar";
import { SearchBar } from "./SearchBar";
import { Background, Wrapper } from "./styled";

export const Navigation = () => (
    <Background>
        <Wrapper>
            <NavBar />
            <SearchBar />
        </Wrapper>
    </Background>
);