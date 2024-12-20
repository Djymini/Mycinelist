import React from 'react';
import {FC} from 'react';
import Card from "./Card";
import movieData from '../DataFake/movie_collection.json';
import {MovieItem} from "../@types/MovieItem";


const movieArray = movieData.results.sort((a, b) => 0.5 - Math.random());


const carouselProperties = [
    {
        name: 'Proposition du jour',
        status: 'dayOffer',
        searchMovies: movieArray.slice(0, 3),
    },
    {
        name: 'Sortie récement',
        status: 'actualyMovie',
        searchMovies: movieArray.filter((item: MovieItem) => Number(item.release_date.substring(0, 4)) >= 2021).slice(0, 3),
    },
    {
        name: 'Vieux cinéma',
        status: 'oldMovie',
        searchMovies: movieArray.filter((item: MovieItem) => Number(item.release_date.substring(0, 4)) <= 2000).slice(0, 3),
    }
];

const ElementCarousel: FC<{ indexNavigation: number }> = ({indexNavigation}) => {
    console.log(typeof carouselProperties[indexNavigation].searchMovies);
    return (
        <div className="carousel">
            <p className="name-carousel">{carouselProperties[indexNavigation].name}</p>
            <div className="carousel-elements">
                {carouselProperties[indexNavigation].searchMovies.map((item: MovieItem) => (<Card movie={item}/>))}
            </div>
        </div>
    );
};

export default ElementCarousel;

