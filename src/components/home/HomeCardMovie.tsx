import React, {useContext, useEffect} from 'react';
import {FC} from 'react';
import IconButton from '@mui/material/IconButton';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import VisibilityIcon from '@mui/icons-material/Visibility';
import {MovieType} from "../../@types/MovieType";
import {palletteColor} from "../../_styles/palletteColor";
import {UserContext} from "../../contexts/UserMovieContext";
import {changeTheDate, displayHoursAndMinutes} from "../../_functions/displayManager";

const HomeCardMovie: FC<{movie:MovieType, isLogged:boolean}> = ({movie, isLogged}) => {
    const userContext = useContext(UserContext);
    const path = `/MovieDetails/${movie.id}`;

    const addFavoriteMovie = () =>{
        if (userContext?.favoriteMovie) {
            const isMovieInFavorites = userContext.favoriteMovie.some((element) => element.id === movie.id);

            if (!isMovieInFavorites) {
                userContext.setFavoriteMovie(prevState => prevState.concat(movie));
                console.log(userContext.favoriteMovie);
            }
        }
    }

    const addSeeingMovie = () => {
        console.log("hello world");
    }

    useEffect(() => {
        if (userContext?.favoriteMovie && userContext.favoriteMovie.length > 0) {
            localStorage.setItem('favoriteMovies', JSON.stringify(userContext?.favoriteMovie));
        }
    }, [userContext?.favoriteMovie]);

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
                <p>{changeTheDate(movie.release_date)}</p>
                <p>{displayHoursAndMinutes(movie.runtime)}</p>
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
