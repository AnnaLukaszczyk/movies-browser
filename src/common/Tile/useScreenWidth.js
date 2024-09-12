import { useEffect, useState } from "react";
import { theme } from "../../core/theme";

export const useScreenWidth = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const resize = () => {
            setScreenWidth(window.innerWidth);
        }

        window.addEventListener("resize", resize);

        return () => {
            window.removeEventListener("resize", resize)
        }
    }, []);
    // mobileLarge theme breakpoint **/
    return screenWidth > 767;
};