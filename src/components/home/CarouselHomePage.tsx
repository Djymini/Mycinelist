import React, {useState} from 'react';
import {FC} from 'react';
import IconButton from '@mui/material/IconButton';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import HomeCardMovie from "./HomeCardMovie";
import Loading from "./Loading";

const CarouselHomePage: FC<{arrayCarousel:any, isLoading:boolean}> = ({arrayCarousel, isLoading}) => {
    const [indexCarousel, setIndexCarousel] = useState<number>(0);

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
            {isLoading ? (
                <>
                    <Loading />
                </>
            ) : (
                <>
                    <h2>{arrayCarousel[indexCarousel].title}</h2>
                    <div id="carousel-home-elements">
                        <IconButton aria-label="navigate-before" onClick={handleNavigateBefore}
                                    sx={{height: '100px', width: '100px'}}>
                            <NavigateBeforeIcon sx={{fontSize: '150px', color: '#E0E1DD'}}/>
                        </IconButton>
                        <HomeCardMovie movie={arrayCarousel[indexCarousel].result}/>
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
