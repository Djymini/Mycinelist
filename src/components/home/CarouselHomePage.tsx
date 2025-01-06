import React, {useState} from 'react';
import {FC} from 'react';
import IconButton from '@mui/material/IconButton';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import HomeCardMovie from "./HomeCardMovie";

const CarouselHomePage: FC<{arrayCarousel:any}> = ({arrayCarousel}) => {
    const [indexCarousel, setIndexCarousel] = useState(0);

    function handleNavigateBefore() {
        if (indexCarousel === 0) {
            setIndexCarousel(arrayCarousel.length - 1);
        } else {
            setIndexCarousel(indexCarousel - 1)
        }
    }

    function handleNavigateNext() {
        if (indexCarousel === arrayCarousel.length - 1) {
            setIndexCarousel(0);
        } else {
            setIndexCarousel(indexCarousel + 1)
        }
    }

    return (
        <section id="carousel-home">
            <h2>{`Tirage au sort : ${arrayCarousel[indexCarousel].title}`}</h2>
            <div id="carousel-home-elements">
                <IconButton aria-label="navigate-before" onClick={handleNavigateBefore} sx={{height: '200px', width: '200px'}}>
                    <NavigateBeforeIcon sx={{fontSize: '300px', color: '#0D1B2A'}}/>
                </IconButton>
                <HomeCardMovie movie={arrayCarousel[indexCarousel].result}/>
                <IconButton aria-label="navigate-next" onClick={handleNavigateNext} sx={{height: '200px', width: '200px'}}>
                    <NavigateNextIcon sx={{fontSize: '300px', color: '#0D1B2A'}}/>
                </IconButton>
            </div>
        </section>
    );
};

export default CarouselHomePage;
