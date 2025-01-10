import React from 'react';
import {FC} from 'react';
import IconButton from '@mui/material/IconButton';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import {MovieType} from "../../@types/MovieType";
import {palletteColor} from "../../_styles/palletteColor";

const HomeCardMovie: FC<{movie:MovieType}> = ({movie}) => {
    const path = `/MovieDetails/${movie.id}`;

    const DisplayHoursAndMinutes = (totalMinutes: number) => {
        const minutes = totalMinutes % 60;
        const hours = Math.floor(totalMinutes / 60);
        if (hours < 1) {
            return `${minutes} minutes`;
        }
        else if(minutes < 10 ){
            return `${hours}h0${minutes}m`;
        }
        else {
            return `${hours}h${minutes}m`;
        }


    };

    return (
        <div id="home-card">
            <a href={path}>
                {movie.backdrop_path === null ?(
                    <img alt={movie.title} id="home-card-image" src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} width={'40%'}/>
                ): (
                    <img alt={movie.title} id="home-card-image" src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} width={'100%'}/>
                )}
            </a>
            <div id="home-card-infos">
                <h3>{movie.title}</h3>
                <p>{movie.release_date}</p>
                <p>{DisplayHoursAndMinutes(movie.runtime)}</p>
                <div id="home-card-button-container">
                    <IconButton aria-label="navigate-before" >
                        <PlayCircleOutlineIcon sx={{fontSize: '56px', color: palletteColor.textColor}}/>
                    </IconButton>
                </div>
            </div>
        </div>
    );
};

export default HomeCardMovie;
