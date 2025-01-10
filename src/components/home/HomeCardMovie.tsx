import React, {useContext, useEffect} from 'react';
import {FC} from 'react';
import IconButton from '@mui/material/IconButton';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import {MovieType} from "../../@types/MovieType";
import {palletteColor} from "../../_styles/palletteColor";
import {UserContext} from "../../contexts/UserMovieContext";
import {getToken} from "../../utilis/storage";
import Router from "../../routers/Router";
import NoAuthentificationRouter from "../../routers/NoAuthentificationRouter";

const HomeCardMovie: FC<{movie:MovieType, isLogged:boolean}> = ({movie, isLogged}) => {
    const userContext = useContext(UserContext);
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

    const addFavoriteMovie = () =>{
        if (userContext?.favoriteMovie) {
            const isMovieInFavorites = userContext.favoriteMovie.some((element) => element.id === movie.id);

            if (!isMovieInFavorites) {
                userContext.setFavoriteMovie(prevState => prevState.concat(movie));
                console.log(userContext.favoriteMovie);
            }
        }
    }

    useEffect(() => {
        if (userContext?.favoriteMovie && userContext.favoriteMovie.length > 0) {
            localStorage.setItem('favoriteMovies', JSON.stringify(userContext?.favoriteMovie));
        }
    }, [userContext?.favoriteMovie]);

    const addSeeingMovie = () => {
        if (userContext?.seeingMovie) {
            const isMovieInFavorites = userContext.seeingMovie.some((element) => element.id === movie.id);

            if (!isMovieInFavorites) {
                userContext.setSeeingMovie(prevState => prevState.concat(movie));
            }
        }
    }

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
                    {isLogged ? (
                            <>
                                <IconButton aria-label="navigate-before">
                                    <PlayCircleOutlineIcon sx={{fontSize: '56px', color: palletteColor.textColor}}/>
                                </IconButton>
                                <IconButton aria-label="navigate-before" onClick={addFavoriteMovie}>
                                    <FavoriteBorderIcon sx={{fontSize: '56px', color: palletteColor.textColor}}/>
                                </IconButton>
                                <IconButton aria-label="navigate-before" onClick={addSeeingMovie}>
                                    <VisibilityIcon sx={{fontSize: '56px', color: palletteColor.textColor}}/>
                                </IconButton>
                            </>
                    ) : (
                        <>
                            <IconButton aria-label="navigate-before">
                                <PlayCircleOutlineIcon sx={{fontSize: '56px', color: palletteColor.textColor}}/>
                            </IconButton>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default HomeCardMovie;
