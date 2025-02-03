import React, {useState} from 'react';
import {FC} from 'react';
import Navbar from "../../components/navbar/Navbar";
import styles from './Header.module.css'

const Header: FC<{isLogged:boolean}> = ({isLogged}) => {
    return (
        <header className = {styles.header}>
            <Navbar isLogged={isLogged}/>
        </header>
    );
};

export default Header;
