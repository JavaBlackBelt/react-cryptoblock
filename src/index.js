import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
import Contract from "./components/Contract";

ReactDOM.render(<App />, document.getElementById("root"));
//ReactDOM.render(<Contract />, document.getElementById("root"));
serviceWorker.unregister();
