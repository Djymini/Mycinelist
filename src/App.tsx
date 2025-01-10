import React, {useReducer, useState} from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import Router from "./routers/Router";
import {HelmetProvider} from "react-helmet-async";
import {AuthContext} from "./contexts/AuthentificationContext";
import {authReducer, initialAuthState} from "./reducer/LoginReducer";
import {getToken} from "./utilis/storage";
import NoAuthentificationRouter from "./routers/NoAuthentificationRouter";


function App() {
    const [state, dispatch] = useReducer(authReducer, initialAuthState);

    const Routing = () => {
        console.log(getToken())
        return getToken() ? <Router/> : <NoAuthentificationRouter/>;
    }

  return (
          <BrowserRouter>
              <HelmetProvider>
                  <AuthContext.Provider value={{state, dispatch}}>
                      <Routing/>
                  </AuthContext.Provider>
              </HelmetProvider>
          </BrowserRouter>
  );
}

export default App;
