import axios from "axios";
import { APIbaseURL, AuthorizationAndLanguage } from "./APIdata";
import moviesPathName from "../moviesPathName";
import peoplePathName from "../peoplePathName";

export const getSearch = async (query, path, page) => {

    const searchPath = () => {
        switch (path) {
            case moviesPathName:
                return "movie";

            case peoplePathName:
                return "person";

            default:
                break;
        }
    };

    const fetchURL = `${APIbaseURL}search/${searchPath()}${AuthorizationAndLanguage}&query=${query}&page=${page}`;

    try {
        const response = await axios.get(fetchURL);
        return response.data;
    } catch {
        throw new Error("Failed to search");
    };
};
