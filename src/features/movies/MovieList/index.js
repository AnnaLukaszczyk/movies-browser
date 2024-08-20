import { useMediaQuery } from 'react-responsive';
import { Section, SectionTitle } from "../../../common/Section"
import { TileLarge, TileSmall } from "../../../common/Tile";
import { List, ListItem, StyledLink } from "./styled";
import { Main } from '../../../common/Main';
import { toMovieDetails } from '../../../core/routes';

export const MovieList = () => {

	const isLargeScreen = useMediaQuery({ query: '(min-width: 992px)' })

	return (
		<Main>
			<Section>
				<SectionTitle>Popular movies</SectionTitle>
				<List>
					<StyledLink to={toMovieDetails()}>
						<ListItem>
							{isLargeScreen ? (
								<TileLarge
									ratingValue="8.1"
									voteAmount="2000"
									title="Mulan"
									year="2020"
									tag="Action"
								/>
							) : <TileSmall
								ratingValue="8.1"
								voteAmount="2000"
								title="Mulan"
								year="2020"
								tag="Action"
							/>}
						</ListItem>
					</StyledLink>
				</List>
			</Section>
		</Main >
	)
};

