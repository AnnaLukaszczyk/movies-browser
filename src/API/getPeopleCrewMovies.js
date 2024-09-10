import { APIbaseURL, AuthorizationAndLanguage } from "./APIdata";

export const getPeopleCrewMovies = async (personId) => {
	try {
		const response = await fetch(
			`${APIbaseURL}person/${personId}/movie_credits${AuthorizationAndLanguage}`
		);

		if (!response.ok) {
			throw new Error(response.statusText);
		}

		const data = await response.json();
		return data.crew;
	} catch (error) {
		throw error;
	}
};
