import React from "react";

function NavBar(props) {
  // console.log("props", props);

  return (
    <div>
      <ul className="nav nav-tabs navBarUl">
        <li
          className={
            props.currentPage === "AboutMe" ? "nav-link active" : "nav-link"
          }
          onClick={() => {
            props.setPage("AboutMe");
          }}
        >
          About Me
        </li>
        <li
          className={
            props.currentPage === "Portfolio" ? "nav-link active" : "nav-link"
          }
          onClick={() => {
            props.setPage("Portfolio");
          }}
        >
          Portfolio
        </li>

        <li
          className={
            props.currentPage === "Resume" ? "nav-link active" : "nav-link"
          }
          onClick={() => {
            props.setPage("Resume");
          }}
        >
          Resume
        </li>
        <li
          className={
            props.currentPage === "ContactInfo" ? "nav-link active" : "nav-link"
          }
          onClick={() => {
            props.setPage("ContactInfo");
          }}
        >
          Contact Info
        </li>

      </ul>
    </div>
  );
}

export default NavBar;
