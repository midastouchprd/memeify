import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Welcome from './App';
import { BrowserRouter as Router } from "react-router-dom";

// Welcome is temporary sanity check component
ReactDOM.render(
    <React.StrictMode>
      <Router>
        <Welcome />
      </Router>
    </React.StrictMode>,
    document.getElementById("root")
);

