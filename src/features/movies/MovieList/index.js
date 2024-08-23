import { useMediaQuery } from "react-responsive";
import { Section, SectionTitle } from "../../../common/Section";
import { MovieTileLarge, MovieTileSmall } from "../../../common/Tile";
import { List, ListItem, StyledLink } from "./styled";
import { toMovieDetails } from "../../../core/routes";
import { StyledMain } from "../../../common/Main/styled";

export const MovieList = () => {
	const isLargeScreen = useMediaQuery({ query: "(min-width: 993px)" });

	return (
		<StyledMain>
			<Section>
				<SectionTitle>Popular movies</SectionTitle>
				<List>
					<StyledLink to={toMovieDetails()}>
						<ListItem>
							{isLargeScreen ? (
								<MovieTileLarge
									ratingValue="8.1"
									voteAmount="2000"
									title="Mulan"
									year="2020"
									tag="Action"
								/>
							) : (
								<MovieTileSmall
									ratingValue="8.1"
									voteAmount="2000"
									title="Mulan"
									year="2020"
									tag="Action"
								/>
							)}
						</ListItem>
					</StyledLink>
				</List>
			</Section>
		</StyledMain>
	);
};
