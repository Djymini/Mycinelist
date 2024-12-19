import React from 'react';
import {FC} from 'react';
import Card from "../components/Card";
import movieData from '../DataFake/movie_collection.json;

const movieArray = movieData.results

const carouselProperties = [
    {
        name: 'Proposition du jour',
        status: 'dayOffer'
    },
    {
        name: 'Proposition du ',
        status: 'actualyMovie'
    },
    {
        name: 'Proposition du jour',
        status: 'oldMovie'
    }
]

const MyComponent: FC<{indexNavigation:number, }> = ({indexNavigation}) => {
    return (
        <div className="carousel" status={carouselProperties[indexNavigation].status}>
            <p>{carouselProperties[indexNavigation].name}</p>
            <div className="carousel-elements">
                <Card movie={}
            </div>
        </div>
    );
};

export default MyComponent;
