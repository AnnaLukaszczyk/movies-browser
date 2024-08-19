import { StyledNavigation, Logo, LogoText, NavSection, StyledLink, } from "./styled";

export const NavBar = () => (
    <StyledNavigation>
        <Logo>
            <LogoText>Movies Browser</LogoText>
        </Logo>
        <NavSection>
            <li>
                <StyledLink
                    activeClassName="active"
                    to="/movies"
                >
                    MOVIES
                </StyledLink>
            </li>
            <li>
                <StyledLink
                    activeClassName="active"
                    to="/people"
                >
                    PEOPLE

                </StyledLink>
            </li>
        </NavSection>
    </StyledNavigation>
);