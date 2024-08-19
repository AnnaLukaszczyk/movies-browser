import { RatingMaxValue, RatingValue, RatingVotesAmount, RatingWrapper, StarIcon } from "./styled"

export const Rating = ({ isOnMoviePhoto, isMovieDetails, ratingValue, voteAmount }) => {
    return (
        <RatingWrapper $onMoviePhoto={isOnMoviePhoto} $movieDetails={isMovieDetails}>
            <StarIcon $onMoviePhoto={isOnMoviePhoto} />
            <RatingValue
                $onMoviePhoto={isOnMoviePhoto}
                $movieDetails={isMovieDetails}
            >
                {ratingValue}
            </RatingValue>
            <RatingMaxValue
                $onMoviePhoto={isOnMoviePhoto}
                $movieDetails={isMovieDetails}
            >
                /10
            </RatingMaxValue>
            <RatingVotesAmount
                $onMoviePhoto={isOnMoviePhoto}
                $movieDetails={isMovieDetails}
            >
                {voteAmount} votes
            </RatingVotesAmount>
        </RatingWrapper>
    )
};
