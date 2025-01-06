import React, {useState} from 'react';
import {FC} from 'react';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import CreateIcon from '@mui/icons-material/Create';
import SearchIcon from '@mui/icons-material/Search';
import Stack from '@mui/material/Stack';
import {NavButton, Search, SearchIconWrapper, StyledInputBase} from "../../_styles/navbarStyles";
import {useNavigate} from "react-router-dom";


const Navbar: FC<{}> = ({}) => {
    const navigate = useNavigate();
    return (
        <>
            <div className="navbar-elements">
                <h1>MYCINELIST</h1>
                <nav>
                    <a href="/Home">Accueil</a>
                    <a href="/Explorer">Explorer</a>
                    <a href="/">Tableau de bord</a>
                </nav>
                <div className="vertical-line" style={{borderLeft: '2px solid', height: '47px'}}></div>
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon/>
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Rechercher"
                        inputProps={{'aria-label': 'search'}}
                    />
                </Search>
            </div>
            <Stack direction="row" spacing={2}>
                <NavButton variant="contained" startIcon={<CreateIcon/>}>S'inscrire</NavButton>
                <NavButton variant="contained" startIcon={<LoginIcon/>}>Se connecter</NavButton>
            </Stack>

        </>
    );
};

export default Navbar;
