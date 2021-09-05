import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Nav from "./components/Nav";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
    <React.StrictMode>
      <Router>
        <Nav />
      </Router>
    </React.StrictMode>,
    document.getElementById("root")
);

reportWebVitals();