import React, {FC} from 'react';
import {MovieType} from "../../@types/MovieType";
import {changeTheDate} from "../../_managers/displayManager";


const MovieItem: FC<{ movie: MovieType}> = ({movie}) => {
    const path = `/MovieDetails/${movie.id}`;

    return (
        <div className="movie-item">
            <a href={path}>
                <img className="movie-item-image" src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}/>
            </a>
            <p className="movie-item-title">{movie.title}</p>
            <p className="movie-item-year">{changeTheDate(movie.release_date)}</p>
        </div>
    );
};

export default MovieItem;
