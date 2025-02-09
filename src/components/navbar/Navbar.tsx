import {FC} from 'react';
import LoginIcon from '@mui/icons-material/Login';
import Stack from '@mui/material/Stack';
import styles from "../../components/navbar/Navbar.module.css";
import {buttonStyles, iconStyles, NavButton} from "./navButtonStyle";
import IconButton from "@mui/material/IconButton";
import {useNavigate} from "react-router-dom";
import Searchbar from "../searchbar/Searchbar";
import {useAuth} from "../../contexts/AuthentificationContext";
import {Logout} from "@mui/icons-material";
import {palletteColor} from "../../_styles/palletteColor";
import {getUsername} from "../../utilis/storage";

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
                    <nav>
                        <a href="/Home">Accueil</a>
                        <a href="/Explorer">Explorer</a>
                        <a href="/Dashboard">Tableau de bord</a>
                    </nav>
                    :
                    <nav>
                        <a href="/Home">Accueil</a>
                        <a href="/Explorer">Explorer</a>
                    </nav>}
            </div>

            <Stack direction="row" spacing={{xs: 1, lg: 2}}>
                <Searchbar userIsConnected={isLogged}/>
                {isLogged ?
                    <>
                        <div className={styles.dropdown}>
                            <div>{getUsername()?.charAt(0)}</div>
                            <ul className={styles.dropdownContent}>
                                <li><a className="dropdown-item" href="#">Favoris</a></li>
                                <li><a className="dropdown-item" href="#">Film vus</a></li>
                                <li><a className="dropdown-item" href="#">Mes listes</a></li>
                                <li><a className="dropdown-item" href="#">Paramètres</a></li>
                            </ul>
                        </div>
                        <IconButton sx={buttonStyles} onClick={handleLogout}>
                            <Logout sx={iconStyles}/>
                        </IconButton>
                    </>
                    :
                    <>
                        <NavButton variant="contained" startIcon={<LoginIcon />} onClick={() => {
                            navigate("/Login")
                        }}>
                        Se connecter
                        </NavButton>
                    </>}
            </Stack>
        </>
    );
};

export default Navbar;
