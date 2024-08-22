import { Main } from "../../../common/Main";
import { Rating } from "../../../common/Rating";
import { BackgroundImage, Header, Title, TitleContainer, Vignette } from "./styled";

export const MovieDetails = () => {
    return (
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
    )
};