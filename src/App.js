import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import Header from "./components/Header";
import Page from "./components/Page";
import Footer from "./components/Footer";

// GIVEN a single-page application portfolio for a web developer
// WHEN I load the portfolio
// TODO I am presented with a page containing a header, a section for content, and a footer
// WHEN I view the header
// TODO I am presented with the developer's name and navigation with titles corresponding to different sections of the portfolio
// WHEN I view the navigation titles
// TODO: I am presented with the titles About Me, Portfolio, Contact, and Resume, and the title corresponding to the current section is highlighted
// WHEN I click on a navigation title
// TODO: I am presented with the corresponding section below the navigation without the page reloading and that title is highlighted
// WHEN I load the portfolio the first time
// TODO: the About Me title and section are selected by default
// WHEN I am presented with the About Me section
// TODO I see a recent photo or avatar of the developer and a short bio about them
// WHEN I am presented with the Portfolio section
// TODO: I see titled images of six of the developer’s applications with links to both the deployed applications and the corresponding GitHub repositories
// WHEN I am presented with the Contact section
// TODO: I see a contact form with fields for a name, an email address, and a message
// WHEN I move my cursor out of one of the form fields without entering text
// TODO: I receive a notification that this field is required
// WHEN I enter text into the email address field
// TODO: I receive a notification if I have entered an invalid email address
// WHEN I am presented with the Resume section
// TODO: I see a link to a downloadable resume and a list of the developer’s proficiencies
// WHEN I view the footer
// TODO: I am presented with text or icon links to the developer’s GitHub and LinkedIn profiles, and their profile on a third platform (Stack Overflow, Twitter)



function App() {
  const [page, setPage] = useState("AboutMe");

  return (
    <main>
      <Header setPage={setPage}/>
      <Page currentPage={page} />
      <Footer/>
    </main>
  );
}

export default App;
