import { APIbaseURL } from "./APIdata";
import { AuthorizationAndLanguage } from "./APIdata";

export const getPopularMovies = async () => {
    try {
        const response = await fetch(
            `${APIbaseURL}movie/details${AuthorizationAndLanguage}&page=1`
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
