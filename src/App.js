import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import Header from "./components/Header";
import Page from "./components/Page";
import Footer from "./components/Footer";

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
