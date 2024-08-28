import { toMovies, toPeople } from "../../../core/routes";
import {
	LogoText,
	NavSection,
	StyledLink,
	StyledNavLink,
	VideoIcon,
	IconContainer,
	StyledHeader,
} from "./styled";

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
					<StyledNavLink to={toMovies()}>MOVIES</StyledNavLink>
				</li>
				<li>
					<StyledNavLink to={toPeople()}>PEOPLE</StyledNavLink>
				</li>
			</NavSection>
		</nav>
	</StyledHeader>
);
