import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  }

  body {
    color: ${(props) => props.theme.colors.font};
    font-family: 'Roboto', sans-serif;
  }

  h1, h2, h3 {
    font-weight: 500;
  }

  a {
    text-decoration: none;
  }

  li {
    list-style: none;
  }

`;
