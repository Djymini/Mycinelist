import React from 'react';
import {FC} from 'react';
import {MovieItem as MovieType} from "../types/MovieItem";
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SvgIcon from '@mui/material/SvgIcon';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

const MovieCard: FC<{movie:MovieType}> = ({movie}) => {
    const image = `https://image.tmdb.org/t/p/original/${movie.poster_path}`;
    const backgroundImageCard = {
        backgroundSize: 'cover',
        backgroundImage: `url(${image})`
    };
    return (
        <div className="movie-card" style={backgroundImageCard}>
            <div className="movie-card-info">
                <div className="movie-card-info-text">
                    <h2>{movie.title}</h2>
                    <p>{movie.release_date}</p>
                </div>
                <div className="movie-card-button-container">
                    <IconButton aria-label="Example">
                        <PlayCircleOutlineIcon style={{color:'#E0E1DD', fontSize: 32}}/>
                    </IconButton>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;
