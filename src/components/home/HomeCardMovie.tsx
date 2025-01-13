import React, {useContext, useEffect} from 'react';
import {FC} from 'react';
import IconButton from '@mui/material/IconButton';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import VisibilityIcon from '@mui/icons-material/Visibility';
import {MovieType} from "../../@types/MovieType";
import {palletteColor} from "../../_styles/palletteColor";
import {UserContext} from "../../contexts/UserMovieContext";

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

    const changeTheDate = (date: string) => {
        const numbers = date.split('-');
        switch (numbers[1]) {
            case "01":
                return numbers[2] + ' jan.'  + ' ' + numbers[0];
            case "02":
                return numbers[2] + ' fev.'  + ' ' + numbers[0];
            case "03":
                return numbers[2] + ' mar.' + ' ' + numbers[0];
            case "04":
                return numbers[2] + ' avr.' + ' ' + numbers[0];
            case "05":
                return numbers[2] + ' mai.' + ' ' + numbers[0];
            case "06":
                return numbers[2] + ' juin' + ' ' + numbers[0];
            case "07":
                return numbers[2] + ' jui.' + ' ' + numbers[0];
            case "08":
                return numbers[2] + ' aou.' + ' ' + numbers[0];
            case "09":
                return numbers[2] + ' sep.' + ' ' + numbers[0];
            case "10":
                return numbers[2] + ' oct.' + ' ' + numbers[0];
            case "11":
                return numbers[2] + ' nov.' + ' ' + numbers[0];
            case "12":
                return numbers[2] + ' dec.' + ' ' + numbers[0];
            default:
                return numbers[2] + '/' + numbers[1] + '/' + numbers[0];
        }
    }

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
                <p>{changeTheDate(movie.release_date)}</p>
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
