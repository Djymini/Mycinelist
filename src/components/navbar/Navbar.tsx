import React, {useState} from 'react';
import {FC} from 'react';
import Searchbar from "./Searchbar";
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import CreateIcon from '@mui/icons-material/Create';
import Stack from '@mui/material/Stack';

const Navbar: FC<{}> = ({}) => {
    return (
        <>
            <div className="navbar-elements">
                <h1>MYCINELIST</h1>
                <nav>
                    <a href="/">Accueil</a>
                    <a href="/">Explorer</a>
                    <a href="/">Tableau de bord</a>
                </nav>
                <div className="vertical-line" style={{borderLeft: '2px solid', height: '47px'}}></div>
                <Searchbar/>
            </div>
            <Stack direction="row" spacing={2}>
                <Button variant="outlined" startIcon={<CreateIcon/>}>S'inscrire</Button>
                <Button variant="outlined" startIcon={<LoginIcon/>}>Se connecter</Button>
            </Stack>

        </>
    );
};

export default Navbar;
