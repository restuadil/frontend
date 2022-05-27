import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle` 
//css reset,font
    @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap");

body {
  margin: 0;
  font-family: "Poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

a {
  text-decoration: none;
}

/* Reset CSS */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`;

export default GlobalStyle