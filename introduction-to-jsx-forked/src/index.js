// all of the react code is written on
// tha app js file as javascript code

//var React = require("react");
//var ReactDOM = require("react-dom");

// instead of the above use import
// this below is create app from scractch
// with import
import React from "react";
import ReactDOM from "react-dom";

// import react component from file
//import Heading from "./Heading.jsx";
//import List from "./List.jsx";

// but instead of have each component we use a main, called App.jsx , where all components are. And render <App /> for the html
import App from "./components/App.jsx";

// simple example, using js vars on html, with -> {}
const myName = "Jaled";
const luckyNumber = "37";
const currentDate = new Date();
const year = currentDate.getFullYear();

// use render function to access react
ReactDOM.render(
  <div>
    <h1>
      {" "}
      Project 1: Created by {myName} and {luckyNumber}{" "}
    </h1>
    <p> Copyright {year} </p>
    <div>
      <img
        alt="ojo"
        className="image"
        src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
      />
      <img
        alt="ojo"
        className="image"
        src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
      />
      <img
        alt="ojo"
        className="image"
        src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
      />
    </div>
    <hr />
    <App />
  </div>,
  document.getElementById("root")
);
