import { StyledMain } from "../../common/Main/styled";
import { Pagination } from "../../common/Pagination";
import { Section, SectionTitle } from "../../common/Section";
import { toMovieDetails } from "../../core/routes";
import { List, StyledLink } from "../movies/MovieList/styled";
import { MovieTile } from "../../common/Tile";

export const SearchMovieList = ({
	searchQuery,
	searchResults,
	searchTotalResults,
	totalPages,
}) => {
	const searchMovies = searchResults;

	return (
		<StyledMain>
			<Section>
				<SectionTitle>
					Search results for {`"${searchQuery}"(${searchTotalResults})`}
				</SectionTitle>
				{searchMovies && (
					<List>
						{searchMovies.map(
							({
								title,
								id,
								rating,
								vote_count,
								date,
								namedGenres,
								poster,
							}) => (
								<li key={id}>
									<StyledLink to={toMovieDetails({ id: id })}>
										<MovieTile
											poster={poster}
											ratingValue={rating}
											voteAmount={vote_count}
											title={title}
											year={date}
											tags={namedGenres}
										/>
									</StyledLink>
								</li>
							)
						)}
					</List>
				)}
			</Section>
			<Pagination totalPages={totalPages} />
		</StyledMain>
	);
};
