import React from "react";
import placeholder from "../assets/placebear.png";
import zooGame from "../assets/zoo-animal-game.png";
import allEvents from "../assets/allEvents.png";
import Card from "react-bootstrap/Card";

const projects = [
  {
    image: zooGame,
    projectName: "Zoo Animal Game",
    description: "This is a fun and educational game",
    deploymentLink: "https://felishayumacias.github.io/Zoo-Animal-Game/",
    gitHubLink: "https://github.com/FelishaYuMacias/Zoo-Animal-Game",
    techUsed: "placeholder"
  },
  {
    image: allEvents,
    projectName: "E-vents",
    description: "This is an event scheduling application",
    deploymentLink: "https://event-planner-bnnr.herokuapp.com/",
    gitHubLink: "https://github.com/24rgraham/event-planner-project",
    techUsed: "placeholder"
  },
  {
    image: placeholder,
    projectName: "IDK YET!",
    description:
      "This is an event scheduling applicationThis is an event scheduling applicationThis is an event scheduling applicationThis is an event scheduling applicationThis is an event scheduling applicationThis is an event scheduling applicationThis is an event scheduling applicationThis is an event scheduling applicationThis is an event scheduling applicationThis is an event scheduling applicationThis is an event scheduling applicatioThis is an event scheduling applicationThis is an event scheduling applicationThis is an event scheduling applicationThis is an event scheduling applicatioThis is an event scheduling applicationThis is an event scheduling applicationThis is an event scheduling applicationThis is an event scheduling application",
    deploymentLink: "placeholder for deployment",
    gitHubLink: "placeholder for GitHubplaceholder for GitHub",
    techUsed: "placeholder"
  },
  {
    image: zooGame,
    projectName: "Zoo Animal Game",
    description: "This is a fun and educational game",
    deploymentLink: "https://felishayumacias.github.io/Zoo-Animal-Game/",
    gitHubLink: "https://github.com/FelishaYuMacias/Zoo-Animal-Game",
    techUsed: "placeholder"
  },
  {
    image: allEvents,
    projectName: "E-vents",
    description: "This is an event scheduling application",
    deploymentLink: "https://event-planner-bnnr.herokuapp.com/",
    gitHubLink: "https://github.com/24rgraham/event-planner-project",
    techUsed: "placeholder"
  },
  {
    image: placeholder,
    projectName: "IDK YET!",
    description:
      "This is an event scheduling applicationThis is an event scheduling applicationThis is an event scheduling applicationThis is an event scheduling applicationThis is an event scheduling applicationThis is an event scheduling applicationThis is an event scheduling applicationThis is an event scheduling applicationThis is an event scheduling applicationThis is an event scheduling applicationThis is an event scheduling applicatioThis is an event scheduling applicationThis is an event scheduling applicationThis is an event scheduling applicationThis is an event scheduling applicatioThis is an event scheduling applicationThis is an event scheduling applicationThis is an event scheduling applicationThis is an event scheduling application",
    deploymentLink: "placeholder for deployment",
    gitHubLink: "placeholder for GitHubplaceholder for GitHub",
    techUsed: "placeholder"
  },
];

function project() {
  const cards = projects.map((p, i) => {
    return (
      <li className="projList" key={i}>
        <Card style={{ width: '18rem'} }>
          <div>
          <Card.Img className="projImg" variant="top" src = {p.image} height="280"/>
          
          </div>
          <Card.Body>
            <Card.Title>{p.projectName}</Card.Title>
            <Card.Text>{p.description}</Card.Text>
            <Card.Link target="_blank" href={p.deploymentLink}>Deployment</Card.Link>
            <Card.Link target="_blank" href={p.gitHubLink}>GitHub</Card.Link>
            <Card.Text>Technology used: {p.techUsed}</Card.Text>
          </Card.Body>
        </Card>
      </li>
    );
  });

  return <ul className="ulForCards">{cards}</ul>;
}

export default project;
