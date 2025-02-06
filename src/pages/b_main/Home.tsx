import React, {useEffect, useState, useTransition} from 'react';
import {FC} from 'react';
import CarouselHomePage from "../../components/home/CarouselHomePage";
import Page from "../../components/Layout/Page";
import {get, getCineDb} from "../../api/api";
import {MovieType} from "../../@types/MovieType";
import CarousellDashboard from "../../components/Dashboard/CarouselList";


const Home: FC<{ isLogged: boolean }> = ({isLogged}) => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [movieHome, setMovieHome] = useState<MovieType[]>([]);

    const [moviesUpcoming, setMoviesUpcoming] = useState<MovieType[]>([]);
    const [moviesOnTheatre , setMoviesOnTheatre] = useState<MovieType[]>([]);

    const [isPending, startTransition] = useTransition()

    const SetupSelection = () => {
        // @ts-ignore
        startTransition(async () => {
            let callMovieOfDay: any[] = await getCineDb("/movieSelection/all");

            const selectedMovies: MovieType[] = [];
            for (let i = 0; i < callMovieOfDay.length; i++) {
                await new Promise((resolve) => setTimeout(resolve, 150));

                const selection: MovieType = await get(`/movie/${callMovieOfDay[i].movieId}`);

                selectedMovies.push(selection);
            }
            setMovieHome(selectedMovies);
            setIsLoading(false);
    })
    }

    const SetupMoviesOnCinema = () => {
        // @ts-ignore
        startTransition(async () => {
            let callApi = await get('/movie/now_playing?page=1');
            setMoviesOnTheatre(callApi.results.filter((movie: MovieType, index: number) => index < 20))
        })
    }

    const SetupMoviesOnComming = () => {
        // @ts-ignore
        startTransition(async () => {
            let callApi = await get('/movie/upcoming?page=1&region=FR');
            setMoviesUpcoming(callApi.results.filter((movie: MovieType, index: number) => index < 20))
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
