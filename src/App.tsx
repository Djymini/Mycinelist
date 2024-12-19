import React from 'react';
import './App.css';
import Page from "./Manager/Page";
import Header from "./components/Header";
import MovieCard from "./components/Card";

const test = {
        "adult": false,
        "backdrop_path": "/hziiv14OpD73u9gAak4XDDfBKa2.jpg",
        "genre_ids": [
            12,
            14
        ],
        "id": 671,
        "original_language": "en",
        "original_title": "Harry Potter and the Philosopher's Stone",
        "overview": "Orphelin, le jeune Harry Potter peut enfin quitter ses tyranniques oncle et tante Dursley lorsqu'un curieux messager lui révèle qu'il est un sorcier. À 11 ans, Harry va enfin pouvoir intégrer la légendaire école de sorcellerie de Poudlard, y trouver une famille digne de ce nom et des amis, développer ses dons, et préparer son glorieux avenir.",
        "popularity": 182.532,
        "poster_path": "/fbxQ44VRdM2PVzHSNajUseUteem.jpg",
        "release_date": "2001-11-16",
        "title": "Harry Potter à l'école des sorciers",
        "video": false,
        "vote_average": 7.909,
        "vote_count": 27420
    };

function App() {
  return (
   <Page title={"Prototype"}>
       <MovieCard movie={test} />
   </Page>
  );
}

export default App;
