import axios from "axios";
import { APIbaseURL } from "./APIdata";
import { AuthorizationAndLanguage } from "./APIdata";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

export const useMovieCredits = () => {
    const movie = useParams();

    const url = `${APIbaseURL}/movie/${movie.id}/credits${AuthorizationAndLanguage}&page=1`;

    const [movieCredits, setMovieCredits] = useState({
        data: [],
        status: "loading",
    });

    useEffect(() => {
        const getMovieCredits = async () => {
            try {
                const response = await axios.get(url);
                setMovieCredits({
                    data: response.data,
                    status: "success",
                });
            } catch (error) {
                setMovieCredits({
                    status: "error",
                });
                console.error(error.message);
            }
        };

        setTimeout(getMovieCredits, 0);
    }, [url]);

    return { movieCredits };
};