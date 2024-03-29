import React from "react";
import ReactDOM from "react-dom/client";

import GlobalStyles from "./styles";
import App from "./App";

import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
);
