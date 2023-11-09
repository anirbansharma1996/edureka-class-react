import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import TextContextProvider from "./context/textContext";
import LoginContextProvider from "./context/loginContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <TextContextProvider>
    <LoginContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </LoginContextProvider>
  </TextContextProvider>
);
