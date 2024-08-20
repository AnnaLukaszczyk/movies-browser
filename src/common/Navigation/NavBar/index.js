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
                <li>
                    <StyledNavLink
                        activeClassName="active"
                        to="/movies"
                    >
                        MOVIES
                    </StyledNavLink>
                </li>
                <li>
                    <StyledNavLink
                        activeClassName="active"
                        to="/people"
                    >
                        PEOPLE

                    </StyledNavLink>
                </li>
            </NavSection>
        </nav>
    </StyledHeader>
);