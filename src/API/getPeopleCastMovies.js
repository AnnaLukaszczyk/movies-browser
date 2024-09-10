import { APIbaseURL, AuthorizationAndLanguage } from "./APIdata";

export const getPeopleCastMovies = async (personId) => {
	try {
		const response = await fetch(
			`${APIbaseURL}person/${personId}/movie_credits${AuthorizationAndLanguage}`
		);

		if (!response.ok) {
			throw new Error(response.statusText);
		}

		const data = await response.json();
		return data.cast;
	} catch (error) {
		throw error;
	}
};
