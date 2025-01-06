import React, {useEffect, useState, useTransition} from 'react';
import {FC} from 'react';
import CarouselHomePage from "../../components/home/CarouselHomePage";
import Page from "../../components/Layout/Page";
import {get} from "../../api/api";
import {Movies} from "../../@types/Movies";
import {MovieType} from "../../@types/movieType";


const Home: FC<{}> = ({}) => {
    const [movieGlobalChoose, setMovieGlobalChoose] = useState();
    const [movieOldChoose, setMovieOldChoose] = useState();
    const [movieFrChoose, setMovieFrChoose] = useState();
    const [movieRecenthoose, setMovieRecentChoose] = useState();
    const [movieAnimationChoose, setMovieAnimation] = useState();
    const [isPending, startTransition] = useTransition()

    const hydrateCollection = () => {
        // @ts-ignore
        startTransition(async () => {
            let movieListGlobalResult = await get(`/discover/movie?include_adult=false&include_video=false&language=fr-FR&page=${Math.random() * (10 - 1) + 1}&sort_by=popularity.desc`);
            let movieListOldResult = await get(`/discover/movie?include_adult=false&include_video=false&language=fr-FR&page=${Math.random() * (10 - 1) + 1}&release_date.lte=${Math.random() * (2010 - 1895) + 1895}-12-31&sort_by=popularity.desc`);
            let movieListFrResult = await get(`/discover/movie?include_adult=false&include_video=false&language=fr-FR&page=${Math.random() * (10 - 1) + 1}&sort_by=popularity.desc&with_origin_country=FR`);
            let movieListRecentResult = await get("/discover/movie?include_adult=false&include_video=false&language=fr-FR&page=1&release_date.gte=2024-11-01&sort_by=popularity.desc");
            let movieListAnimation = await get(`/discover/movie?include_adult=false&include_video=false&language=fr-FR&page=${Math.random() * (10 - 1) + 1}&sort_by=popularity.desc&with_genres=16`);

            const randomMovieGlobal = movieListGlobalResult.results[Math.floor(Math.random() * movieListGlobalResult.results.length)];
            const randomMovieOld = movieListOldResult.results[Math.floor(Math.random() * movieListOldResult.results.length)];
            const randomMovieFr = movieListFrResult.results[Math.floor(Math.random() * movieListFrResult.results.length)];
            const randomMovieRecent = movieListRecentResult.results[Math.floor(Math.random() * movieListRecentResult.results.length)];
            const randomMovieAnimation = movieListAnimation.results[Math.floor(Math.random() * movieListAnimation.results.length)];

            const movieGlobalChoose = await get(`/movie/${randomMovieGlobal.id}?language=fr-FR',`);
            const movieOldChoose = await get(`/movie/${randomMovieOld.id}?language=fr-FR',`);
            const movieFrChoose = await get(`/movie/${randomMovieFr.id}?language=fr-FR',`);
            const movieRecentChoose = await get(`/movie/${randomMovieRecent.id}?language=fr-FR',`);
            const movieAnimationChoose = await get(`/movie/${randomMovieAnimation.id}?language=fr-FR',`);

            startTransition(()=>{
                setMovieGlobalChoose(movieGlobalChoose);
                setMovieOldChoose(movieOldChoose);
                setMovieFrChoose(movieFrChoose);
                setMovieRecentChoose(movieRecentChoose);
                setMovieAnimation(movieAnimationChoose);
            })
        })

    }

    useEffect(() => {
        hydrateCollection()
    }, []);

    let chooseMovie = [
        {
            "title": "aléatoire",
            "result": movieGlobalChoose
        },
        {
            "title": "récent",
            "result": movieRecenthoose
        },
        {
            "title": "ancien film",
            "result": movieOldChoose
        },
        {
            "title": "film français",
            "result": movieFrChoose
        },
        {
            "title": "film d'animation",
            "result": movieAnimationChoose
        },
    ]


    return (
        <Page title={"Accueil"}>
                <main>
                    {!isPending && movieGlobalChoose &&
                        <>
                            <CarouselHomePage arrayCarousel={chooseMovie}/>
                        </>
                    }
                </main>
        </Page>
    );
};

export default Home;
