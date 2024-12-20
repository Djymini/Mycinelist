import React from 'react';
import {FC} from 'react';
import LoginIcon from '@mui/icons-material/Login';
import SearchIcon from '@mui/icons-material/Search';
import {LogButton, Search, SearchIconWrapper, StyledInputBase} from "../_styles/navbarStyle";


const Navbar: FC = ({}) => {
    return (
            <div className="navbar">
                <h1>MYCINELIST</h1>
                <div className="navbar-element">
                    <nav>
                        <a href="/Home">Accueil</a>
                        <a href="/">Parcourir</a>
                    </nav>
                    <span className="vertical-line"></span>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon sx={{fontSize: 48}}/>
                        </SearchIconWrapper>
                        <StyledInputBase placeholder="Rechercher" inputProps={{'aria-label': 'search'}}/>
                    </Search>
                    <LogButton variant="contained" endIcon={<LoginIcon/>}>
                        Se connecter
                    </LogButton>
                </div>
            </div>
    );
};

export default Navbar;
