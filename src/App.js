import React, { useState } from "react";
import Header from "./components/Header";
import Page from "./components/Page";
import Footer from "./Footer";

function App() {
  const [page, setPage] = useState("AboutMe");

  return (
    <>
      <Header setPage={setPage}/>
      <Page currentPage={page} />
      <Footer/>
    </>
  );
}

export default App;
