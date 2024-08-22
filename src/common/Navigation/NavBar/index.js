import { toMovies, toPeople } from "../../../core/routes";
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
                        to={toMovies()}
                    >
                        MOVIES
                    </StyledNavLink>
                    <StyledNavLink
                        activeClassName="active"
                        to={toPeople()}
                    >
                        PEOPLE
                    </StyledNavLink>
            </NavSection>
        </nav>
    </StyledHeader>
);