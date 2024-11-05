import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
:root {
        
}
@supports (height: 100dvh) {
    :root {
        --unit-100vh: 100dvh;
    }
}

*,
*::before,
*::after {
    box-sizing: border-box;
}

html,
body {
    height: 100%;
}
html {
    font-size: 100%;
    scroll-behavior: smooth;
}

body {
    font-family: acumin-pro,sans-serif;
    margin: 0 auto;
}

textarea {
    font-family: acumin-pro,sans-serif;
}

a {
    color: black;
}
`;
