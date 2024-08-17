import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *,
    ::after,
    ::before {
        box-sizing: inherit;
    }
    :focus {
        outline: none;
    }

    body {
        margin: 0 auto;
	    max-width: 1500px;
	    height: 100vh;
        background: ${({ theme }) => theme.color.whisper};
        color: ${({ theme }) => theme.color.woodsmoke};
        font-family: 'Poppins', sans-serif;
    }
`;