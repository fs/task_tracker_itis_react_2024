import "react-toastify/dist/ReactToastify.css";
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

@keyframes headerAnimation {
  0% {
    transform: translateY(-10%);
  }

  50% {
    transform: translateY(0%);
  }

  100% {
    transform: translateY(-10%);
  }
}

  * {
    font-family: "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif;
    box-sizing: border-box;
  }
  html,
  body {
    height: 100%;
    background: #EEE0CB;
  }

  html {
    text-size-adjust: 100%;
  }

  body {
    min-height: 100%;
    padding: 0;
    margin: 0;
  }

  h1 {
    font-weight: 600;
    font-size: 4rem;
    color: #C2847A;
    margin: 1rem 0 3rem 0;
  }

  h1 {
    animation: headerAnimation 3s infinite;
  }

  h1:hover {
    cursor: pointer;
  }

${'' /* h1:hover {
  transition-duration: 0.75s;
  cursor: pointer;
  transform: translateY(-20%);
}

h1:not(:hover) {
  transition-duration: 0.75s;
  transform: translateY(0%);
} */}

p {
  font-weight: 400;
  font-size: 1.2rem;
  color: #280003;
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
