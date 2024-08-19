import { RatingValue, StarIcon } from "./styled"

export const Rating = ({ isOnMoviePhoto, isMovieDetails, ratingValue }) => {
    return (
        <div>
            <StarIcon $onMoviePhoto={isOnMoviePhoto} />
            <RatingValue
                $onMoviePhoto={isOnMoviePhoto}
                $movieDetails={isMovieDetails}
            >
                {ratingValue}

            </RatingValue>
        </div>
    )
};
