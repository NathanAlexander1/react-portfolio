import React from "react";
import zooGame from "../assets/projects/zoo-animal-game.png";
import allEvents from "../assets/projects/allEvents.png";
import weatherApp from "../assets/projects/weather-app.png";
import noteTaker from "../assets/projects/notetaker.png";
import workScheduler from "../assets/projects/workday-scheduler.png";
import triviaProject from "../assets/projects/trivia-project.png";
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
    image: weatherApp,
    projectName: "Weather Dashboard",
    description:
      "Search cities and get up-to-the-minute weather information plus 5-day forecast!",
    deploymentLink: "https://nathanalexander1.github.io/weather-dashboard/",
    gitHubLink: "https://github.com/NathanAlexander1/weather-dashboard",
    techUsed: "Weather API, Local Storage, JS, CSS, HTML"
  },
  {
    image: noteTaker,
    projectName: "Notetaker App",
    description: "Keep track of your to-do list with this dynamic notetaker application!",
    deploymentLink: "https://note-taker-nathanalexander1.herokuapp.com/notes",
    gitHubLink: "https://github.com/NathanAlexander1/Note-Taker",
    techUsed: "NPM, Express, UUID, mySQL"
  },
  {
    image: workScheduler,
    projectName: "Workday Scheduler",
    description: "Organize your day with this workday scheduler application! Past, present and future tasks are color coded based on time!",
    deploymentLink: "https://nathanalexander1.github.io/work-day-scheduler/",
    gitHubLink: "https://github.com/NathanAlexander1/work-day-scheduler",
    techUsed: "HTML, CSS, JS, Local Storage"
  },
  {
    image: triviaProject,
    projectName: "Bug Trivia",
    description:
      "Have a fun time and learn all about bugs with this fun trivia game!",
    deploymentLink: "https://nathanalexander1.github.io/trivia-project/",
    gitHubLink: "https://github.com/NathanAlexander1/trivia-project",
    techUsed: "HTML, CSS, JS, Local Storage"
  },
];

function project() {
  const cards = projects.map((p, i) => {
    return (
      <li className="projList" key={i}>
        <Card style={{ width: '18rem'} }>
          <div>
          <Card.Link target="_blank" href={p.deploymentLink}>
          <Card.Img className="projImg border" variant="top" src = {p.image} height="280"/>
          </Card.Link>
          
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
