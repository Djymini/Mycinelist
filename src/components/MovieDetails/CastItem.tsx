import React, {useState, FC} from 'react';
import {CastType} from "../../@types/CastType";


const CastItem: FC<{title: string, subTitle: string, index:number, img:string}> = ({title, subTitle, index, img}) => {
    return (
        <div key={index} className="movie-item2">
            {img !== null ?
                <img className="movie-item-image" src={`https://image.tmdb.org/t/p/original/${img}`} width={'180px'}/>
                :
                <img className="movie-item-image" src="/PortraitPlaceholder.png" alt="Placeholder Person" width={'180px'}/>
            }

            <p className="movie-item-title">{title}</p>
            <p className="movie-item-year">{subTitle}</p>
        </div>
    );
};

export default CastItem;