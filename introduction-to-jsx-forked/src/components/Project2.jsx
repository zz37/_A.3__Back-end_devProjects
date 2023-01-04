// import react, as always
import React from "react";

function Project2() {
  // for project 2, changing the h1 title, depending on the hour
  const date = new Date();
  const timeNow = date.getHours();
  let greetings;

  const customStyle = {
    color: ""
  };

  if (timeNow < 12) {
    greetings = "Good Moorning";
    customStyle.color = "red";
  } else if (timeNow < 18) {
    greetings = "Good Afternoon";
    customStyle.color = "green";
  } else {
    greetings = "Godd Night";
    customStyle.color = "blue";
  }

  return (
    <h1 className="heading" style={customStyle}>
      {" "}
      {greetings}{" "}
    </h1>
  );
}

// export component
export default Project2;
