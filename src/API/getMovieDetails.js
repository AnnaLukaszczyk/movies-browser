import { APIbaseURL, AuthorizationAndLanguage } from "./APIdata";

export const getMovieDetails = async (id) => {
    try {
        const response = await fetch(
            `${APIbaseURL}movie/${id}${AuthorizationAndLanguage}`
        );

        if (!response.ok) {
            throw new Error(response.statusText);
        }

        return await response.json();

    } catch (error) {
        throw error;
    };
};