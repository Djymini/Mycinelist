import React, {FC} from 'react';
import {MovieType} from "../../@types/MovieType";
import {changeTheDate} from "../../_managers/displayManager";
import {MovieShortType} from "../../@types/MovieShortType";



const MovieItem: FC<{ movie: MovieType | MovieShortType}> = ({movie}) => {
    const path = `/MovieDetails/${movie.id}`;

    // Vérification du type basée sur une propriété spécifique
    const isMovieType = (movie: MovieType | MovieShortType): movie is MovieType => {
        return (movie as MovieType).poster_path !== undefined;
    };

    return (
        <div className="movie-item">
            {isMovieType(movie) ? (
                <>
                    <a href={path}>
                        {movie.poster_path !== null ? (
                            <>
                                <img
                                    className="movie-item-image"
                                    src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                                    alt={movie.title}
                                />
                            </>
                        )
                        :
                            (
                                <>
                                    <img
                                        className="movie-item-image"
                                        src="/placeholder_movie.png"
                                        alt={movie.title}
                                    />
                                </>
                            )}

                    </a>
                    <p className="movie-item-title">{movie.title}</p>
                    <p className="movie-item-year">{changeTheDate(movie.release_date)}</p>
                </>
            ) : (
                <>
                    <a href={path}>
                        <img
                            className="movie-item-image"
                            src={`https://image.tmdb.org/t/p/original/${movie.posterPath}`}
                            alt={movie.name} // Ajoutez alt pour l'accessibilité
                        />
                    </a>
                    <p className="movie-item-title">{movie.name}</p>
                    <p className="movie-item-year">{changeTheDate(movie.releaseDate)}</p>
                </>
            )}
        </div>
    );
};

export default MovieItem;
