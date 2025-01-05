import React, {useState} from 'react';
import {FC} from 'react';
import IconButton from '@mui/material/IconButton';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

const HomeCardMovie: FC<{}> = ({}) => {
    return (
        <div id="home-card">
            <img id="home-card-image" src={require('../../DataFake/bannierHaikyuu.webp')} width={'50%'}/>
            <div id="home-card-infos">
                <h3>Titre du film</h3>
                <p>date du film</p>
                <p>genre du film</p>
                <p>durée du film</p>
                <div id="home-card-button-container">
                    <IconButton aria-label="navigate-before" >
                        <PlayCircleOutlineIcon sx={{fontSize: '56px', color: '#E0E1DD'}}/>
                    </IconButton>
                </div>
            </div>
        </div>
    );
};

export default HomeCardMovie;
