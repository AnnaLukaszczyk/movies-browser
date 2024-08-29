import { APIbaseURL } from "./APIdata";
import { AuthorizationAndLanguage } from "./APIdata";

export const getPopularPeople = async (page) => {
    try {
        const response = await fetch(
            `${APIbaseURL}person/popular${AuthorizationAndLanguage}&page=${page}`
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
