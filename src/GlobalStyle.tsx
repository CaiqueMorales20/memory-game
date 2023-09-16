// Imports
import { createGlobalStyle } from "styled-components";

// Styled Components
export const GlobalStyle = createGlobalStyle`
  /* ==================== CSS Variables ==================== */
  :root{
    --clrPrimary700: #545454;
    --clrPrimary500: #989898;
    --clrPrimary400: #F5F5F5;
  }

  /* ==================== HTML Reseting ==================== */
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  body{
    background-color: var(--clrPrimary400);
    max-width: 100vw;
    overflow-x: hidden;
  }
`;
