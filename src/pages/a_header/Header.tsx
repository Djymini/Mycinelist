import React, {useState} from 'react';
import {FC} from 'react';
import Navbar from "../../components/navbar/Navbar";

const Header: FC<{isLogged:boolean}> = ({isLogged}) => {
    return (
        <header>
            <Navbar isLogged={isLogged}/>
        </header>
    );
};

export default Header;
