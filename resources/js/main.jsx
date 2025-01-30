import React, { StrictMode } from "react";
import ReactDom from "react-dom/client";
import App from "./App.jsx";
import axios from "axios";
import "../css/app.css";

window.axios = axios;
window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
ReactDom.createRoot(document.getElementById("app")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
