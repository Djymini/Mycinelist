import React, {useState, FC} from 'react';

const MovieItem: FC<{}> = ({}) => {
    return (
        <div className="movie-item">
            <img className="movie-item-image" src={require('../../DataFake/haikyuu.jpg')} width={'208px'}/>
            <p className="movie-item-title">Titre du film</p>
            <p className="movie-item-year">2011-12-12</p>
        </div>
    );
};

export default MovieItem;
