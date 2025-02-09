import React, {useContext, useEffect, useState} from 'react';
import {FC} from 'react';
import IconButton from '@mui/material/IconButton';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import VisibilityIcon from '@mui/icons-material/Visibility';
import {MovieType} from "../../../@types/MovieType";
import {palletteColor} from "../../../_styles/palletteColor";
import {changeTheDate, displayHoursAndMinutes} from "../../../_managers/displayManager";
import {postCineDb} from "../../../api/api";
import {getFavoriteMovie, getToken} from "../../../utilis/storage";
import styles from "../homeCardMovie/homeCardMovie.module.css"
import {MovieShortType} from "../../../@types/MovieShortType";

const HomeCardMovie: FC<{movie:MovieType, isLogged:boolean}> = ({movie, isLogged}) => {
    const userToken = getToken();
    const [favorite, setFavorite] = useState<MovieShortType[]>([]);
    const path = `/MovieDetails/${movie.id}`;

    const addFavoriteMovie = async () =>{
        const data = {
            id: movie.id,
            name: movie.title,
            runtime: movie.runtime,
            releaseDate: movie.release_date,
            posterPath: movie.poster_path,
        }
        setFavorite(prevState => {
            return [...prevState, ...[data]];
        });
        await postCineDb('/movie', data);
        await postCineDb('/favorite', {userId: 0, movieId: movie.id}, {headers: {Authorization: `Bearer ${userToken}`}});
    }

    const addSeeingMovie = async () => {
        const data = {
            id: movie.id,
            name: movie.title,
            runtime: movie.runtime,
            releaseDate: movie.release_date,
            posterPath: movie.poster_path,
        }
        await postCineDb('/movie', data);
    }

    const updateFavorite = () => {
        const favoriteMovieString = getFavoriteMovie();
        const arrayFavorite = favoriteMovieString ? JSON.parse(favoriteMovieString) : [];
        setFavorite(arrayFavorite)
    }

    useEffect(() => {
        updateFavorite();
    }, []);

    return (
        <div className={styles.homeCard}>
            <a href={path}>
                {movie.backdrop_path === null ?(
                    <img alt={movie.title} id="home-card-image" src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} width={'40%'}/>
                ): (
                    <img alt={movie.title} id="home-card-image" src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} width={'100%'}/>
                )}
            </a>
            <div className={styles.homeCardInfo}>
                <h3>{movie.title}</h3>
                <p>{changeTheDate(movie.release_date)}</p>
                <p>{displayHoursAndMinutes(movie.runtime)}</p>
                <div className={styles.homeCardButtonContainer}>
                    {isLogged ? (
                            <>
                                <IconButton aria-label="navigate-before">
                                    <PlayCircleOutlineIcon sx={{fontSize: '56px', color: palletteColor.textColor}}/>
                                </IconButton>
                                <IconButton aria-label="navigate-before" onClick={addFavoriteMovie}>
                                    {favorite.find((element) => element.id === movie.id) !== undefined ? (
                                        <FavoriteIcon sx={{fontSize: '56px', color: palletteColor.textColor}}/>
                                    )
                                        :
                                        (
                                           <FavoriteBorderIcon sx={{fontSize: '56px', color: palletteColor.textColor}}/>
                                    )}
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
