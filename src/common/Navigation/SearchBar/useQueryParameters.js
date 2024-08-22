import { useLocation } from "react-router-dom/cjs/react-router-dom";

export const useQueryParameter = (target) => {
    const location = useLocation();

    return (new URLSearchParams(location.search)).get(target);
};