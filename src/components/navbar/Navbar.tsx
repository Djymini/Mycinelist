import React, {useState} from 'react';
import {FC} from 'react';
import LoginIcon from '@mui/icons-material/Login';
import Stack from '@mui/material/Stack';
import {
    linkStyle,
    navbarRightElementStyle,
    NavButton, navStyle
} from "../../_styles/navbarStyles";
import IconButton from "@mui/material/IconButton";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {useNavigate} from "react-router-dom";
import Searchbar from "./Searchbar";
import {useAuth} from "../../contexts/AuthentificationContext";

const Navbar: FC<{isLogged:boolean}> = ({isLogged}) => {
    const navigate = useNavigate();
    const {dispatch} = useAuth();

    const handleLogout = async () => {
        dispatch({type: 'LOGOUT'});
        navigate("/")

    }

    return (
        <>
            <div className="navbar-right-element" style={navbarRightElementStyle}>
                <h1>MYCINELIST</h1>
                {isLogged ?
                    <nav style={navStyle}>
                        <a href="/Home" style={linkStyle}>Accueil</a>
                        <a href="/Explorer" style={linkStyle}>Explorer</a>
                        <a href="/Dashboard" style={linkStyle}>Tableau de bord</a>
                    </nav>
                    :
                    <nav style={navStyle}>
                        <a href="/Home" style={linkStyle}>Accueil</a>
                        <a href="/Explorer" style={linkStyle}>Explorer</a>
                    </nav>}
            </div>

            <Stack direction="row" spacing={2}>
                <Searchbar userIsConnected={isLogged}/>
                {isLogged ?
                    <>
                        <IconButton sx={{height: '56px', width: '56px', backgroundColor: '#E0E1DD'}}>
                            <AccountCircleIcon sx={{fontSize: '70px', color: '#415A77'}}/>
                        </IconButton>
                        <NavButton variant="contained" startIcon={<LoginIcon/>} onClick={handleLogout}>
                            Se déconnecter
                        </NavButton>
                    </>
                    :
                    <>
                        <NavButton variant="contained" startIcon={<LoginIcon/>} onClick={() => {navigate("/Login")}}>
                            Se connecter
                        </NavButton>
                    </>}
            </Stack>
        </>
    );
};

export default Navbar;
