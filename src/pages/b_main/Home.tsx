import React, {useEffect, useState, useTransition} from 'react';
import {FC} from 'react';
import CarouselHomePage from "../../components/home/CarouselHomePage";
import Page from "../../components/Layout/Page";
import {get} from "../../api/api";
import {Suspense} from 'react';
import {MovieType} from "../../@types/movieType";
import Loading from "../../components/home/Loading";


const Home: FC<{}> = ({}) => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [movieOldChoose, setMovieOldChoose] = useState<MovieType>();
    const [movieFrChoose, setMovieFrChoose] = useState<MovieType>();
    const [movieRecenthoose, setMovieRecentChoose] = useState<MovieType>();
    const [movieAnimationChoose, setMovieAnimation] = useState<MovieType>();
    const [isPending, startTransition] = useTransition()

    const hydrateCollection = () => {
        // @ts-ignore
        startTransition(async () => {
            let movieListRecentResult = await get("/discover/movie?include_adult=false&include_video=false&language=fr-FR&page=1&release_date.gte=2024-11-01&sort_by=popularity.desc");
            let movieListOldResult = await get(`/discover/movie?include_adult=false&include_video=false&language=fr-FR&page=${Math.random() * (10 - 1) + 1}&release_date.lte=2005-12-31&sort_by=popularity.desc`);
            let movieListFrResult = await get(`/discover/movie?include_adult=false&include_video=false&language=fr-FR&page=${Math.random() * (10 - 1) + 1}&sort_by=popularity.desc&with_origin_country=FR`);
            let movieListAnimation = await get(`/discover/movie?include_adult=false&include_video=false&language=fr-FR&page=${Math.random() * (10 - 1) + 1}&sort_by=popularity.desc&with_genres=16`);

            const randomMovieRecent = movieListRecentResult.results[Math.floor(Math.random() * movieListRecentResult.results.length)];
            const randomMovieOld = movieListOldResult.results[Math.floor(Math.random() * movieListOldResult.results.length)];
            const randomMovieFr = movieListFrResult.results[Math.floor(Math.random() * movieListFrResult.results.length)];
            const randomMovieAnimation = movieListAnimation.results[Math.floor(Math.random() * movieListAnimation.results.length)];

            const movieRecentChoose = await get(`/movie/${randomMovieRecent.id}?language=fr-FR',`);
            const movieOldChoose = await get(`/movie/${randomMovieOld.id}?language=fr-FR',`);
            const movieFrChoose = await get(`/movie/${randomMovieFr.id}?language=fr-FR',`);
            const movieAnimationChoose = await get(`/movie/${randomMovieAnimation.id}?language=fr-FR',`);

            startTransition(()=>{
                setMovieFrChoose(movieFrChoose);
                setMovieOldChoose(movieOldChoose);
                setMovieRecentChoose(movieRecentChoose);
                setMovieAnimation(movieAnimationChoose);
                setIsLoading(isPending);
            })
        })

    }

    useEffect(() => {
        hydrateCollection()
    }, []);

    let chooseMovie = [
        {
            "title": "Récent",
            "result": movieRecenthoose
        },
        {
            "title": "Ancien film",
            "result": movieOldChoose
        },
        {
            "title": "Film français",
            "result": movieFrChoose
        },
        {
            "title": "Film d'animation",
            "result": movieAnimationChoose
        },
    ]

    return (
        <Page title={"Accueil"}>
            {isLoading ? (
                <CarouselHomePage arrayCarousel={chooseMovie} isLoading={isLoading}/>
            ) : movieOldChoose ? (
                <CarouselHomePage arrayCarousel={chooseMovie} isLoading={isLoading}/>
            ) : (
                <div>Aucune donnée disponible</div>
            )}
        </Page>
    );
};

export default Home;
