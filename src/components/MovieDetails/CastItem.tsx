import React, {useState, FC} from 'react';
import {CastType} from "../../@types/CastType";


const CastItem: FC<{cast: CastType, index:number}> = ({cast, index}) => {
    return (
        <div key={index} className="movie-item">
            <img className="movie-item-image" src={`https://image.tmdb.org/t/p/original/${cast.profile_path}`} width={'180px'}/>
            <p className="movie-item-title">{cast.known_for_department}</p>
            <p className="movie-item-year">{cast.name}</p>
        </div>
    );
};

export default CastItem;