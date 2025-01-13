import React, {useState, FC} from 'react';
import {Movies} from "../../@types/Movies";
import {MovieType} from "../../@types/MovieType";

interface MovieCollection {
    results: MovieType[];
}

const MovieItem: FC<{ movie: MovieType}> = ({movie}) => {
    const changeTheDate = (date: string) => {
        const numbers = date.split('-');
        switch (numbers[1]) {
            case "01":
                return numbers[2] + ' jan.' + ' ' + numbers[0];
            case "02":
                return numbers[2] + ' fev.' + ' ' + numbers[0];
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
