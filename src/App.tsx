import React, {useState} from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import Router from "./routers/Router";
import {HelmetProvider} from "react-helmet-async";


function App() {
  return (
          <BrowserRouter>
              <HelmetProvider>
                  <Router/>
              </HelmetProvider>
          </BrowserRouter>
  );
}

export default App;
