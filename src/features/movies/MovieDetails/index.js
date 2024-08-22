import { Rating } from "../../../common/Rating";
import {
	BackgroundImage,
	Header,
	Title,
	TitleContainer,
	Vignette,
} from "./styled";
import { Section } from "../../../common/Section";
import { MovieDetailsTile } from "../../../common/Tile";

export const MovieDetails = () => {
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
			<Section>
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
			</Section>
		</>
	);
};
