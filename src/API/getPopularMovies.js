import { APIbaseURL } from "./APIdata";
import { AuthorizationAndLanguage } from "./APIdata";

export const getPopularMovies = async (page) => {
    try {
        const response = await fetch(
            `${APIbaseURL}movie/popular${AuthorizationAndLanguage}&page=${page}`
        );

        if (!response.ok) {
            throw new Error(response.statusText);
        }
        const responseJson = await response.json();
        const responseResult = await responseJson;
        return responseResult;

    } catch (error) {
        throw error;
    }
};
