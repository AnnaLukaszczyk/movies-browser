import { APIbaseURL } from "./APIdata";
import { AuthorizationAndLanguage } from "./APIdata";

export const getMovieCredits = async () => {
    try {
        const response = await fetch(
            `${APIbaseURL}movie/{movie_id}/credits${AuthorizationAndLanguage}&page=1`
        );

        if (!response.ok) {
            throw new Error(response.statusText);
        }
        const responseJson = await response.json();
        const responseResult = await responseJson.results;
        return responseResult;

    } catch (error) {
        throw error;
    }
};
