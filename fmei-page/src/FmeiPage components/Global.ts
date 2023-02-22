import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: sans-serif;
        text-decoration: none;
    }

    :root{
        font-size: 62.5%;
        --linear-gradient: linear-gradient(to bottom,#01015c, #0505f7);
        --border-radius: 20px 20px 0 0;
        // Project Colors
        --main-color: #00008a;
        --secondary-color: #0505f7;
        --white: #fff;
        --light-gray: #f3f3f377;
    }

    body{
        font-size: 1.6rem;
        width: 100%;
        height: 100%;
    }

    img{
        width: 100%;
    }
`;