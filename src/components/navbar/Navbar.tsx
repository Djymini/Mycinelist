import React, {useState} from 'react';
import {FC} from 'react';
import LoginIcon from '@mui/icons-material/Login';
import CreateIcon from '@mui/icons-material/Create';
import SearchIcon from '@mui/icons-material/Search';
import Stack from '@mui/material/Stack';
import {NavButton, Search, SearchIconWrapper, StyledInputBase} from "../../_styles/navbarStyles";
import IconButton from "@mui/material/IconButton";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {useNavigate} from "react-router-dom";

const Navbar: FC<{}> = ({}) => {
    const [isLogged, setIsLogged] = useState<boolean>(false);
    const navigate = useNavigate();

    return (
        <>
            <div className="navbar-elements">
                <h1>MYCINELIST</h1>
                {isLogged ?
                    <nav>
                        <a href="/Home">Accueil</a>
                        <a href="/Explorer">Explorer</a>
                        <a href="/">Tableau de bord</a>
                    </nav>
                    :
                    <nav>
                        <a href="/Home">Accueil</a>
                        <a href="/Explorer">Explorer</a>
                    </nav>}
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
            {isLogged ?
                <Stack direction="row" spacing={2}>
                    <IconButton sx={{height: '56px', width: '56px', backgroundColor: '#E0E1DD'}}>
                        <AccountCircleIcon sx={{fontSize: '70px', color: '#415A77'}}/>
                    </IconButton>
                    <NavButton variant="contained" startIcon={<LoginIcon/>}>Se déconnecter</NavButton>
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
