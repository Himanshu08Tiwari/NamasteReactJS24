import React from "react";
import ReactDOM from "react-dom/client";

let parent = React.createElement('h1', { id: "parent" }, "THis is h1 tag");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);