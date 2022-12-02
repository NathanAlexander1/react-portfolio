import React from "react";

const projects = [
  "project1",
  "project2",
  "project3",
  "project4",
  "project5",
  "project6",
];

function project() {
  const cards = projects.map((p, i) => {
    return <li key={i}>{p}</li>;
  });

  return (
    <div>
      {cards}
    </div>
  );
}

export default project;
