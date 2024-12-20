import React, {useState} from 'react';
import './App.css';
import Page from "./Manager/Page";
import CarouselHomePage from "./components/CarouselHomePage";
import Home from "./pages/Home";
import {BrowserRouter} from "react-router-dom";
import Router from "./routers/Router";
import {AuthContext} from "./contexts/AuthContext";


function App() {
    const [isLogged, setIsLogged] = useState(false)

    function userLog() {
        if (isLogged) {
            setIsLogged(false);
        } else {
            setIsLogged(true);
        }
    }
  return (
          <BrowserRouter>
              <AuthContext.Provider value={{isLogged, setIsLogged}}>
              <Router/>
              </AuthContext.Provider>
          </BrowserRouter>
  );
}

export default App;
