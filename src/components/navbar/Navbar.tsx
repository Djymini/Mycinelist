import React, {useState} from 'react';
import {FC} from 'react';
import LoginIcon from '@mui/icons-material/Login';
import Stack from '@mui/material/Stack';
import styles from "../../components/navbar/Navbar.module.css";
import {NavButton} from "./navButtonStyle";
import IconButton from "@mui/material/IconButton";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {useNavigate} from "react-router-dom";
import Searchbar from "../searchbar/Searchbar";
import {useAuth} from "../../contexts/AuthentificationContext";
import {Logout} from "@mui/icons-material";
import {palletteColor} from "../../_styles/palletteColor";

const Navbar: FC<{isLogged:boolean}> = ({isLogged}) => {
    const navigate = useNavigate();
    const {dispatch} = useAuth();

    const handleLogout = async () => {
        dispatch({type: 'LOGOUT'});
        navigate("/")

    }

    return (
        <>
            <div className={styles.navbarRightElements}>
                <h1>MYCINELIST</h1>
                {isLogged ?
                    <nav className={styles.nav}>
                        <a className={styles.a} href="/Home">Accueil</a>
                        <a className={styles.a} href="/Explorer">Explorer</a>
                        <a className={styles.a} href="/Dashboard">Tableau de bord</a>
                    </nav>
                    :
                    <nav className={styles.nav}>
                        <a className={styles.a} href="/Home">Accueil</a>
                        <a className={styles.a} href="/Explorer">Explorer</a>
                    </nav>}
            </div>

            <Stack direction="row" spacing={2}>
                <Searchbar userIsConnected={isLogged}/>
                {isLogged ?
                    <>
                        <IconButton sx={{height: '56px', width: '56px', backgroundColor: '#E0E1DD'}}>
                            <AccountCircleIcon sx={{fontSize: '70px', color: '#415A77'}}/>
                        </IconButton>
                        <IconButton sx={{height: '56px', width: '56px', backgroundColor: palletteColor.buttonColor}} onClick={handleLogout}>
                            <Logout sx={{margin: '0 0 0 4px', fontSize: '45px', color: palletteColor.textColor}}/>
                        </IconButton>
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
