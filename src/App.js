import React from "react";
// import { useState, useEffect } from "react";
import "./App.css";
import requests from "./Requests";
import Row from "./Components/Row";
import Banner from "./Components/Banner";
import Nav from "./Components/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner fetchUrl={requests.fetchNetflixOriginal} />
      <Row
        title="Popular"
        fetchUrl={requests.fetchNetflixOriginal}
        isLarge={true}
      />
      <Row title="Trending now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action" fetchUrl={requests.fetchAction} />
      <Row title="Horror" fetchUrl={requests.fetchHorror} />
      <Row title="Romance" fetchUrl={requests.fetchRomance} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
