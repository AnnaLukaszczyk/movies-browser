import { LogoText, NavSection, StyledLink, StyledNavLink, VideoIcon, IconContainer, StyledHeader } from "./styled";

export const NavBar = () => (
    <StyledHeader>
        <StyledLink to="/">
            <IconContainer>
                <VideoIcon />
                <LogoText>Movies Browser</LogoText>
            </IconContainer>
        </StyledLink>
        <nav>
            <NavSection>
                    <StyledNavLink
                        activeClassName="active"
                        to="/movies"
                    >
                        MOVIES
                    </StyledNavLink>
                    <StyledNavLink
                        activeClassName="active"
                        to="/people"
                    >
                        PEOPLE
                    </StyledNavLink>
            </NavSection>
        </nav>
    </StyledHeader>
);