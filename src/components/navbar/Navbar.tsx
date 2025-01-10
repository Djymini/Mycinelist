import React, {useState} from 'react';
import {FC} from 'react';
import LoginIcon from '@mui/icons-material/Login';
import CreateIcon from '@mui/icons-material/Create';
import Stack from '@mui/material/Stack';
import {navbarElement, navbarElementA, navbarElementNav, NavButton} from "../../_styles/navbarStyles";
import IconButton from "@mui/material/IconButton";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {useNavigate} from "react-router-dom";
import Searchbar from "./Searchbar";
import {useAuth} from "../../contexts/AuthentificationContext";

const Navbar: FC<{userIsLogged:boolean}> = ({userIsLogged}) => {
    const isLogged = userIsLogged;
    const navigate = useNavigate();
    const {dispatch} = useAuth();

    const handleLogout = async () => {
        dispatch({type: 'LOGOUT'});
        console.log('User logged out');
        navigate("/")

    }

    return (
        <>
            <div className="navbar-elements" style={navbarElement}>
                <h1>MYCINELIST</h1>
                {isLogged ?
                    <nav style={navbarElementNav}>
                        <a href="/Home" style={navbarElementA}>Accueil</a>
                        <a href="/Explorer" style={navbarElementA}>Explorer</a>
                        <a href="/" style={navbarElementA}>Tableau de bord</a>
                    </nav>
                    :
                    <nav style={navbarElementNav}>
                        <a href="/Home" style={navbarElementA}>Accueil</a>
                        <a href="/Explorer" style={navbarElementA}>Explorer</a>
                    </nav>}
                    <div className="vertical-line" style={{borderLeft: '2px solid', height: '47px', margin: 'auto 0'}}></div>
            <Searchbar/>
            </div>
            {isLogged ?
                <Stack direction="row" spacing={2}>
                    <IconButton sx={{height: '56px', width: '56px', backgroundColor: '#E0E1DD'}}>
                        <AccountCircleIcon sx={{fontSize: '70px', color: '#415A77'}}/>
                    </IconButton>
                    <NavButton variant="contained" startIcon={<LoginIcon/>} onClick={handleLogout}>Se déconnecter</NavButton>
                </Stack>
                :
                <Stack direction="row" spacing={2}>
                    <NavButton variant="contained" startIcon={<CreateIcon/>}>S'inscrire</NavButton>
                    <NavButton variant="contained" startIcon={<LoginIcon/>} onClick= {() => {navigate("/Login")}}>Se connecter</NavButton>
                </Stack>}
        </>
    );
};

export default Navbar;
