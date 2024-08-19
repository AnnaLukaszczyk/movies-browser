import { StyledNavigation, Logo, LogoText, NavSection, StyledLink, } from "./styled";

export const NavBar = () => (
    <StyledNavigation>
        <Logo>
            <LogoText>Movies Browser</LogoText>
        </Logo>
        <NavSection>
            <li><StyledLink>MOVIES</StyledLink></li>
            <li><StyledLink>PEOPLE</StyledLink></li>
        </NavSection>
    </StyledNavigation>
);