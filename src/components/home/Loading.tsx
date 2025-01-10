import React, {FC} from 'react';
import {h2CarouselHomePageStyle} from "../../_styles/carouselHomePageStyle";

const Loading: FC<{}> = ({}) => {
    return (
        <>
            <h2 className="loading" style={h2CarouselHomePageStyle}>🌀 Chargement...</h2>
        </>
    );
};

export default Loading;
