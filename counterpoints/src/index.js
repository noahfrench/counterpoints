import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Route from "./Route.js";
import registerServiceWorker from "./registerServiceWorker";
import "typeface-roboto";

ReactDOM.render(<Route />, document.getElementById("root"));
registerServiceWorker();
