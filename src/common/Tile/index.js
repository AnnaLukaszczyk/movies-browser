import { StyledTile, Image, Content, Title, Year, Tags, Tag } from "./styled";
import poster from "../images/poster.png";
import { Rating } from "../Rating";

export const Tile = ({ ratingValue }) => {
    return (
        <StyledTile>
            <Image src={poster} alt="" />
            <Content>
                <Title>Mulan</Title>
                <Year>2020</Year>
                <Tags>
                    <Tag>Action</Tag>
                    <Tag>Adventure</Tag>
                    <Tag>Drama</Tag>
                </Tags>
            </Content>
            <Rating  // to jest Rating dla kafelków na MovieList
                ratingValue={ratingValue}
            />
            <Rating // ten Rating ma być w kafelku na tle zdjęcia filmu w MovieDetails
                isOnMoviePhoto
                ratingValue={ratingValue}
            />
            <Rating // ten Rating ma być w kafelku z danymi filmu w MovieDetails
                isMovieDetails
                ratingValue={ratingValue}
            />
        </StyledTile>
    )
};
