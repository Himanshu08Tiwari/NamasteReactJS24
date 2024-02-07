import React from "react";
import ReactDOM from "react-dom";
import search from "../Episode03/search.png";
import logo from "../Episode03/logo.jpeg";
import user from "../Episode03/user.png";

/*
let heading = React.createElement("h1", {}, "This is Namaste React Episode 03");

// react element using jsx

let jsxHeading = (
  <div>
    {heading}
    <h1>This is JSX Heading</h1>
  </div>
);

// react component
// method 1
let HeadingComp = () => {
  return (
    <div className="component">
      <h1>This is JSX Component</h1>
      {jsxHeading}
    </div>
  );
};

// method 2
let HeadingComp2 = () => (
  <div className="component">
    {jsxHeading}
    <h1>This is JSX Component 2</h1>
  </div>
);

let lastHeading = (
  <div>
    <HeadingComp2 />
    {HeadingComp()}
    <h1>this is last Element</h1>
  </div>
);
*/

// Assignment Episode 03

// Task 01 create nested element using  core react apporach
/*
let Header = React.createElement("div", { className: "title" }, [
  React.createElement("h1", { key: "h1" }, "This is H1 Tag"),
  React.createElement("h2", { key: "h2" }, "This is H2 Tag"),
  React.createElement("h3", { key: "h3" }, "This is H3 Tag"),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(Header);
*/

// Task 02 creating react element using jsx
/*
let Header = (
  <div className="title">
    <h1>This is H1 Tag</h1>
    <h2>This is H2 Tag</h2>
    <h3>This is H3 Tag</h3>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(Header);
*/

// Task 03 creating header using functional component
/*
let Header = () => (
  <div className="title">
    <h1>This is H1 Tag</h1>
    <h2>This is H2 Tag</h2>
    <h3>This is H3 Tag</h3>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);
*/

// Task 04 creating header nav bar using component

const Header = () => (
  <div className="head">
    <div className="left-box">
      <div className="logo-div">
        <img src={logo} className="img-icon"></img>
      </div>
      <h1>My Portfolio</h1>
    </div>
    <div className="search-box">
      <input type="text" placeholder="Write Something here"></input>
      <div className="search-div">
        <img src={search} className="search-icon"></img>
      </div>
    </div>
    <div className="right-box">
      <div className="user-div">
        <img src={user} className="user-icon"></img>
      </div>
    </div>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);
