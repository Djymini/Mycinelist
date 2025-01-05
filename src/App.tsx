import React, {useState} from 'react';
import './App.css';
import Header from "./pages/a_header/Header";
import {Helmet} from "react-helmet-async";
import Home from "./pages/b_main/Home";


function App() {
  return (
          <>
              <Helmet>
                  <title>Mycinelist</title>
                  <link rel="preconnect" href="https://fonts.googleapis.com"/>
                  <link rel="preconnect" href="https://fonts.gstatic.com"/>
                  <link
                      href="https://fonts.googleapis.com/css2?family=Chakra+Petch:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Goldman:wght@400;700&display=swap"
                      rel="stylesheet"/>
              </Helmet>
              <Header/>
              <Home/>
          </>
  );
}

export default App;
