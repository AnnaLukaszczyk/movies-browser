import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { setPath } from "./searchSlice";

export const usePathname = () => {

    const dispatch = useDispatch();
    const location = useLocation();

    const path = location.pathname.slice(1);

    const updatePath = () => {
        switch (path) {
            case "movies":
                return dispatch(setPath(path));
            case "people":
                return dispatch(setPath(path));
            default:
                return dispatch(setPath(""));
        };
    };

    return updatePath;
};