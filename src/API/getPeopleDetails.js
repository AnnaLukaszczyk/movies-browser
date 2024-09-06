import { APIbaseURL, AuthorizationAndLanguage } from "./APIdata";

export const getPeopleDetails = async (id) => {
    try {
        const response = await fetch(
            `${APIbaseURL}person/${id}${AuthorizationAndLanguage}`
        );

        if (!response.ok) {
            throw new Error(response.statusText);
        }

        const data = await response.json();
        return data;

    } catch (error) {
        throw error;
    };
};