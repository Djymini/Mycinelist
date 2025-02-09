import React, {FC,useState} from 'react';
import IconButton from '@mui/material/IconButton';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import HomeCardMovie from "./homeCardMovie/HomeCardMovie";
import Loading from "../home/Loading";
import {MovieType} from "../../@types/MovieType";
import styles from "../carouselHomePage/carouselHomePage.module.css"


const CarouselHomePage: FC<{arrayForCarousel:MovieType[], isLoading:boolean, isLogged:boolean}> = ({arrayForCarousel, isLoading, isLogged}) => {
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
        <>
            <div className={styles.carouselBackground}></div>
            <section className={styles.carouselHome}>
                {isLoading ? (
                    <>
                        <Loading />
                    </>
                ) : (
                    <>
                        <div className={styles.carouselHomeElements}>
                            <IconButton aria-label="navigate-before" onClick={handleNavigateBefore} sx={{height: '100px', width: '100px'}}>
                                <NavigateBeforeIcon sx={{fontSize: '150px', color: '#E0E1DD'}}/>
                            </IconButton>

                            <HomeCardMovie movie={arrayForCarousel[indexCarousel]} isLogged={isLogged}/>

                            <IconButton aria-label="navigate-next" onClick={handleNavigateNext} sx={{height: '100px', width: '100px'}}>
                                <NavigateNextIcon sx={{fontSize: '150px', color: '#E0E1DD'}}/>
                            </IconButton>
                        </div>
                    </>
                    )}
            </section>
        </>
    );
};

export default CarouselHomePage;
