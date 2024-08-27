import { APIbaseURL, AuthorizationAndLanguage } from "./APIdata";

export const getGenres = async () => {
    try {
        const response = await fetch(
            `${APIbaseURL}genre/movie/list${AuthorizationAndLanguage}`
        );

        if (!response.ok) {
            throw new Error(response.statusText)
        }
        return await response.json();
    }
    catch (error) {
        throw error;
    }
};