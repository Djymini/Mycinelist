import React, {useState} from 'react';
import {FC} from 'react';
import Navbar from "../../components/navbar/Navbar";

const Header: FC<{}> = ({}) => {
    return (
        <header>
            <Navbar/>
        </header>
    );
};

export default Header;
