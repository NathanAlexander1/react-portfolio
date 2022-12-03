import React from "react";
import placeholder from "../assets/placebear.png";
import Card from "react-bootstrap/Card";

const projects = [
  {
    image: <img src={placeholder} alt="bear" />,
    projectName: "Zoo Animal Game",
    description: "This is a fun and educational game",
    deploymentLink: "https://felishayumacias.github.io/Zoo-Animal-Game/",
    gitHubLink: "https://github.com/FelishaYuMacias/Zoo-Animal-Game",
  },
  {
    image: <img src={placeholder} alt="bear" />,
    projectName: "E-vents",
    description: "This is an event scheduling application",
    deploymentLink: "https://event-planner-bnnr.herokuapp.com/",
    gitHubLink: "https://github.com/24rgraham/event-planner-project",
  },
  {
    image: {placeholder},
    projectName: "IDK YET!",
    description:
      "This is an event scheduling applicationThis is an event scheduling applicationThis is an event scheduling applicationThis is an event scheduling applicationThis is an event scheduling applicationThis is an event scheduling applicationThis is an event scheduling applicationThis is an event scheduling applicationThis is an event scheduling applicationThis is an event scheduling applicationThis is an event scheduling applicatioThis is an event scheduling applicationThis is an event scheduling applicationThis is an event scheduling applicationThis is an event scheduling applicatioThis is an event scheduling applicationThis is an event scheduling applicationThis is an event scheduling applicationThis is an event scheduling application",
    deploymentLink: "placeholder for deployment",
    gitHubLink: "placeholder for GitHubplaceholder for GitHub",
  },
];

function project() {
  const cards = projects.map((p, i) => {
    return (
      <li className="projList" key={i}>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={p.image} alt="bear"/>
          <Card.Body>
            <Card.Title>{p.projectName}</Card.Title>
            <Card.Text>{p.description}</Card.Text>
            <Card.Link target="_blank" href={p.deploymentLink}>Deployment</Card.Link>
            <Card.Link target="_blank" href={p.gitHubLink}>GitHub</Card.Link>
          </Card.Body>
        </Card>
      </li>
    );
  });

  return <ul className="ulForCards">{cards}</ul>;
}

export default project;
