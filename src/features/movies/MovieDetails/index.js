import { Rating } from "../../../common/Rating";
import {
	BackgroundImage,
	Header,
	Title,
	TitleContainer,
	Vignette,
	Section,
	List,
} from "./styled";
import { SectionTitle } from "../../../common/Section";
import { MovieDetailsTile, PeopleTile } from "../../../common/Tile";
import { StyledMain as Main } from "../../../common/Main/styled";
import { ListItem, StyledLink } from "../../people/PeopleList/styled";
import { toPeopleDetails } from "../../../core/routes";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectMovieCredits, setStatus } from "./movieCreditsSlice";

export const MovieDetails = () => {
	const dispatch = useDispatch();
	const credits = useSelector(selectMovieCredits);

	useEffect(() => {
		dispatch(setStatus())
	},
		[]);

	return (
		<>
					<Header>
				<BackgroundImage>
					<Vignette />
					<TitleContainer>
						<Title>Mulan</Title>
						<Rating // ten Rating ma być w kafelku na tle zdjęcia filmu w MovieDetails
							isOnMoviePhoto
							ratingValue="5"
							voteAmount="2000"
						/>
					</TitleContainer>
				</BackgroundImage>
			</Header>
				<Main>
				<MovieDetailsTile
					ratingValue="8.1"
					voteAmount="2000"
					title="Mulan"
					year="2020"
					production="China, United States of America"
					date="24.10.2020"
					tag="Action"
					description="A young Chinese maiden disguises herself as a male warrior in order to save her father. Disguises herself as a male warrior in order to save her father.  A young Chinese maiden disguises herself as a male warrior in order to save her father."
				/>
				 <Section>
            <SectionTitle>Cast</SectionTitle>
            <List>
			{credits.map((id, credit_id, profile_path, name, character) => (
                <StyledLink to={toPeopleDetails()}>
                    <ListItem key={id}>
                        <PeopleTile 
                            key={credit_id}
                            id={id}
                            image={profile_path}
                            title={name}
                            subtitle={character}
                        />
                    </ListItem>
                </StyledLink>
				))}
            </List>
            </Section>
				<Section>
					<SectionTitle>Crew</SectionTitle>
					<List>
						<StyledLink to={toPeopleDetails()}>
							<ListItem>
								<PeopleTile name="nazwisko" role="scenarzysta" />
							</ListItem>
						</StyledLink>
					</List>
				</Section>
				</Main>
			 </>
	);
};
