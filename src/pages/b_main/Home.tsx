import React, {useEffect, useState, useTransition} from 'react';
import {FC} from 'react';
import CarouselHomePage from "../../components/home/CarouselHomePage";
import Page from "../../components/Layout/Page";
import {get} from "../../api/api";
import {MovieType} from "../../@types/MovieType";

interface Selection {
    "title": string,
    "movieResult": MovieType,
    "path_API": string,
}

const Home: FC<{ isLogged: boolean }> = ({isLogged}) => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [movieHome, setMovieHome] = useState<Selection[]>([]);
    const [isPending, startTransition] = useTransition()
    const [index, setIndex] = useState(0);

    const arrayForSelection = [
        {
            "title": "Récent",
            "path": "/discover/movie?include_adult=false&include_video=false&language=fr-FR&page=1&release_date.gte=2024-11-01&sort_by=popularity.desc",
        },
        {
            "title": "Ancient film",
            "path": "/discover/movie?include_adult=false&include_video=false&language=fr-FR&page=" + Math.floor(Math.random() * 20) + 1 + "&release_date.lte=2005-12-31&sort_by=popularity.desc",
        },
        {
            "title": "Film français",
            "path": "/discover/movie?include_adult=false&include_video=false&language=fr-FR&page=" + Math.floor(Math.random() * 20) + 1 + "&sort_by=popularity.desc&with_origin_country=FR",
        }, {
            "title": "Film d'animation",
            "path": "/discover/movie?include_adult=false&include_video=false&language=fr-FR&page=" + Math.floor(Math.random() * 20) + 1 + "&sort_by=popularity.desc&with_genres=16",
        }
    ]

    const SetupSelection = (title: string, pathAPI: string) => {
        // @ts-ignore
        startTransition(async () => {
            let callApi = await get(pathAPI)
            let randomChoiceInList = callApi.results[Math.floor(Math.random() * callApi.results.length)];
            let movieApiResult = await get(`/movie/${randomChoiceInList.id}?language=fr-FR',`);
            const selection: Selection = {title: title, movieResult: movieApiResult, path_API: pathAPI};

            startTransition(() => {
                setMovieHome(prevState => prevState.concat(selection));
            })
    })
    }

    useEffect(() => {
        SetupSelection(arrayForSelection[index].title, arrayForSelection[index].path);
        setIsLoading(isPending);
    }, [index]);

    useEffect(() => {
        if (index < 3) {
            setIndex(index + 1);
        }
    }, [movieHome]);

    return (
        <Page title={"Accueil"}>
            {isLoading ? (
                <CarouselHomePage arrayForCarousel={movieHome} isLoading={isLoading} isLogged={isLogged}/>
            ) : movieHome[0] ? (
                <CarouselHomePage arrayForCarousel={movieHome} isLoading={isLoading} isLogged={isLogged}/>
            ) : (
                <div>Aucune donnée disponible</div>
            )}
        </Page>
    );
};

export default Home;
