import React, {useEffect, useReducer, useState} from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import Router from "./routers/Router";
import {HelmetProvider} from "react-helmet-async";
import {AuthContext} from "./contexts/AuthentificationContext";
import {authReducer, initialAuthState} from "./reducer/LoginReducer";
import {getToken} from "./utilis/storage";
import NoAuthentificationRouter from "./routers/NoAuthentificationRouter";
import {MovieType} from "./@types/MovieType";
import {UserContext} from "./contexts/UserMovieContext";


function App() {
    const [state, dispatch] = useReducer(authReducer, initialAuthState);
    const [favoriteMovie, setFavoriteMovie] = useState<MovieType[]>([]);
    const [seeingMovie, setSeeingMovie] = useState<MovieType[]>([]);

   const Routing = () => {
        console.log(state);
        console.log(dispatch)
        return getToken() ? <Router/> : <NoAuthentificationRouter/>;
    };

  return (
          <BrowserRouter>
              <HelmetProvider>
                  <AuthContext.Provider value={{state, dispatch}}>
                      <UserContext.Provider value={{favoriteMovie, setFavoriteMovie, seeingMovie, setSeeingMovie}}>
                          <Routing/>
                      </UserContext.Provider>
                  </AuthContext.Provider>
              </HelmetProvider>
          </BrowserRouter>
  );
}

export default App;
