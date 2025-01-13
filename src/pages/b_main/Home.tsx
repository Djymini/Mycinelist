import React, {useEffect, useState, useTransition} from 'react';
import {FC} from 'react';
import CarouselHomePage from "../../components/home/CarouselHomePage";
import Page from "../../components/Layout/Page";
import {get} from "../../api/api";
import {MovieType} from "../../@types/MovieType";
import CarousellDashboard from "../../components/Dashboard/CarousellDashboard";


const Home: FC<{ isLogged: boolean }> = ({isLogged}) => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [movieHome, setMovieHome] = useState<MovieType[]>([]);

    const [moviesUpcoming, setMoviesUpcoming] = useState<MovieType[]>([]);
    const [moviesOnTheatre , setMoviesOnTheatre] = useState<MovieType[]>([]);

    const [isPending, startTransition] = useTransition()

    const pathForMovieSelection = [
        "/movie/popular?language=fr-FR&page=1&region=FR",
        "/movie/top_rated?language=fr-FR&page="+ Math.floor(Math.random() * 20) + 1 +"&region=FR",
        "/discover/movie?include_adult=false&include_video=false&language=fr-FR&page=" + (Math.floor(Math.random() * 100) + 1) + "&release_date.lte=2005-12-31&sort_by=popularity.desc",
        "/discover/movie?include_adult=false&include_video=false&language=fr-FR&page=" + (Math.floor(Math.random() * 100) + 1) + "&sort_by=popularity.desc&with_origin_country=FR",
        "/discover/movie?include_adult=false&include_video=false&language=fr-FR&page=" + (Math.floor(Math.random() * 100) + 1) + "&sort_by=popularity.desc&with_genres=16",
        "/discover/movie?include_adult=false&include_video=false&language=fr-FR&page=" + (Math.floor(Math.random() * 100) + 1) + "&sort_by=popularity.desc&with_genres=99"
    ]

    const SetupSelection = () => {
        // @ts-ignore
        startTransition(async () => {
            const selectedMovies: MovieType[] = [];
            for (let i = 0; i < pathForMovieSelection.length; i++) {
                await new Promise((resolve) => setTimeout(resolve, 150));

                let callApi = await get(pathForMovieSelection[i]);
                let randomChoiceInList = callApi.results[Math.floor(Math.random() * callApi.results.length)];
                const selection: MovieType = await get(`/movie/${randomChoiceInList.id}?language=fr-FR`);

                selectedMovies.push(selection);
            }
            setMovieHome(selectedMovies);
            setIsLoading(false);
    })
    }

    const SetupMoviesOnCinema = () => {
        // @ts-ignore
        startTransition(async () => {
            let callApi = await get('/movie/now_playing?language=fr-FR&page=1&region=FR');
            setMoviesOnTheatre(callApi.results.filter((movie: MovieType, index: number) => index < 10))
        })
    }

    const SetupMoviesOnComming = () => {
        // @ts-ignore
        startTransition(async () => {
            let callApi = await get('/movie/upcoming?language=fr-FR&page=1&region=FR');
            setMoviesUpcoming(callApi.results.filter((movie: MovieType, index: number) => index < 10))
        })
    }

    useEffect(() => {
        SetupSelection();
        SetupMoviesOnCinema();
        SetupMoviesOnComming();
    }, []);

    return (
        <Page title={"Accueil"}>
            {isLoading ? (
                <CarouselHomePage arrayForCarousel={movieHome} isLoading={isLoading} isLogged={isLogged}/>
            ) : movieHome[0] ? (
                <CarouselHomePage arrayForCarousel={movieHome} isLoading={isLoading} isLogged={isLogged}/>
            ) : (
                <div>Aucune donnée disponible</div>
            )}
            <CarousellDashboard name={"Au cinéma"} item={moviesOnTheatre} />
            <CarousellDashboard name={"A venir"} item={moviesUpcoming}/>
        </Page>
    );
};

export default Home;
