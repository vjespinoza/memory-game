import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');

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
    font-weight: 500
  }

  a {
    text-decoration: none;
  }

  li {
    list-style: none;
  }

`;
