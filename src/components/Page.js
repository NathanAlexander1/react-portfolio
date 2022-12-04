import React from 'react';
// import NavBar from './NavBar';
import AboutMe from "./AboutMe";
import Portfolio from "./Portfolio";
import ContactInfo from "./ContactInfo";
import Resume from "./Resume";

function page(props) {
  const renderPage = () => {
    if (props.currentPage === "AboutMe") {
      return <AboutMe />;
    } else if (props.currentPage === "Portfolio") {
      return <Portfolio />;
    } else if (props.currentPage === "ContactInfo") {
      return <ContactInfo />;
    } else {
      return <Resume />;
    }
  };

  return <div>{renderPage()}</div>;
}

export default page;
