import React from 'react';
import {FC} from 'react';
import Navbar from "./Navbar";

const Header: FC<{}> = ({}) => {
    return (
        <header>
            <Navbar/>
        </header>
    );
};

export default Header;
