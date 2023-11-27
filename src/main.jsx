import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Link } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <nav className="space">
        <Link to="/">contest</Link>
        <Link to="/Problem">problems</Link>
      </nav>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
