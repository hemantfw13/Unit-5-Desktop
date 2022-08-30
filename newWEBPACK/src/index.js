import { add, mult } from "./calc";

import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
console.log(add(10, 4));
console.log(mult(10, 4));

// const h1 = document.createElement("h1");
// h1.innerHTML = "HOW ARE YOU ";

// h1.classList.add("redtext");

const el = React.createElement("h1", { className: redtext }, "THIS IS REACT");

ReactDOM.render(el, document.getElementById("hemant"));
