import React, {useState} from 'react';
import {FC} from 'react';
import IconButton from '@mui/material/IconButton';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import MovieItem from "../explorer/MovieItem";

const HomeCardMovie: FC<{movie:any}> = ({movie}) => {

    const hoursAndMinutes = (totalMinutes: number) => {
        const minutes = totalMinutes % 60;
        const hours = Math.floor(totalMinutes / 60);

        return `${hours}h${minutes}m`;
    };

    return (
        <div id="home-card">
            <img id="home-card-image" src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} width={'50%'}/>
            <div id="home-card-infos">
                <h3>{movie.title}</h3>
                <p>{movie.release_date}</p>
                <p>{hoursAndMinutes(movie.runtime)}</p>
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
