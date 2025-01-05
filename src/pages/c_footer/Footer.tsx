import React, {useState} from 'react';
import {FC} from 'react';

const Footer: FC<{}> = ({}) => {
    return (
        <footer>
            <a href="/">Me contacter</a>
            <p>Site réalisé par Mawele Mbizi</p>
            <a href="/">Mention légale</a>
        </footer>
    );
};

export default Footer;