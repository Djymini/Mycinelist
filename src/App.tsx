import React from 'react';
import './App.css';
import Page from "./Manager/Page";
import Header from "./components/Header";
import MovieCard from "./components/Card";

function App() {
  return (
   <Page title={"Prototype"}>
       <MovieCard/>
   </Page>
  );
}

export default App;
