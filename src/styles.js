import "react-toastify/dist/ReactToastify.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    font-family: "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif;
    box-sizing: border-box;
  }
  html,
  body {
    height: 100%;
  }

  html {
    text-size-adjust: 100%;
  }

  body {
    min-height: 100%;
    padding: 0;
    margin: 0;
  }

  :focus {
    outline: 0;
  }

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }

  input,
  textarea {
    font-variant-ligatures: no-contextual;
  }

  a,
  button {
    font-variant-ligatures: no-contextual;

    cursor: pointer;
  }

  a {
    text-decoration: none;

    outline: none;

    transition: all 0.25s ease-in-out 0s;
  }

  ul,
  ol {
    padding: 0;
    margin: 0;

    list-style: none;
  }
`;
