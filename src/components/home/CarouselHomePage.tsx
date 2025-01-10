import React, {FC,useState} from 'react';
import IconButton from '@mui/material/IconButton';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import HomeCardMovie from "./HomeCardMovie";
import Loading from "./Loading";
import {carouselHome, carouselHomeElements, h2CarouselHomePageStyle} from "../../_styles/carouselHomePageStyle";


const CarouselHomePage: FC<{arrayForCarousel:any, isLoading:boolean}> = ({arrayForCarousel, isLoading}) => {
    const [indexCarousel, setIndexCarousel] = useState<number>(0);

    function handleNavigateBefore() {
        if (indexCarousel === 0) {
            setIndexCarousel(arrayForCarousel.length - 1);
        } else {
            setIndexCarousel(indexCarousel - 1)
        }
    }

    function handleNavigateNext() {
        if (indexCarousel === arrayForCarousel.length - 1) {
            setIndexCarousel(0);
        } else {
            setIndexCarousel(indexCarousel + 1)
        }
    }

    return (
        <section id="carousel-home" style={carouselHome}>
            {isLoading ? (
                <>
                    <Loading />
                </>
            ) : (
                <>
                    <h2 style={h2CarouselHomePageStyle}>{arrayForCarousel[indexCarousel].title}</h2>
                    <div id="carousel-home-elements" style={carouselHomeElements}>
                        <IconButton aria-label="navigate-before" onClick={handleNavigateBefore}
                                    sx={{height: '100px', width: '100px'}}>
                            <NavigateBeforeIcon sx={{fontSize: '150px', color: '#E0E1DD'}}/>
                        </IconButton>
                        <HomeCardMovie movie={arrayForCarousel[indexCarousel].movieResult}/>
                        <IconButton aria-label="navigate-next" onClick={handleNavigateNext}
                                    sx={{height: '100px', width: '100px'}}>
                            <NavigateNextIcon sx={{fontSize: '150px', color: '#E0E1DD'}}/>
                        </IconButton>
                    </div>
                </>
                )}
        </section>
    );
};

export default CarouselHomePage;
