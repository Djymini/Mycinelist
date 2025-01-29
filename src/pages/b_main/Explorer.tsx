import React, {useState, FC, useTransition, useEffect, useRef} from 'react';
import MovieItem from "../../components/explorer/MovieItem";
import DrawerExplorer from "../../components/explorer/DrawerExplorer";
import Page from "../../components/Layout/Page";
import {get} from "../../api/api";
import {ExpContext} from "../../contexts/ExplorerContext";
import {MovieType} from "../../@types/MovieType";
import {debounceTime, fromEvent, switchMap} from "rxjs";
import Loading from "../../components/home/Loading";

const Explorer: FC<{}> = ({}) => {
    const [movieCollection, setMovieCollection] = useState<MovieType[]>([])
    const [year1, setYear1] = useState(1894)
    const [year2, setYear2] = useState(2025)
    const [genre, setGenre] = useState("")

    const [page, setPage] = useState(1);
    const [nbPages, setNbPages] = useState<number>(1);

    const loadMoreRef = useRef<HTMLDivElement | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isPending, startTransition] = useTransition()

    const hydrateCollection = async () => {
        let results: any
        if (genre === "") {
            results = await get(`/discover/movie?include_adult=false&include_video=false&language=fr-FR&page=${page}&primary_release_date.gte=${year1}-12-31&primary_release_date.lte=${year2}-12-31&sort_by=popularity.desc`);
        } else {
            results = await get(`/discover/movie?include_adult=false&language=fr-FR&page=${page}&primary_release_date.gte=${year1}-01-01&primary_release_date.lte=${year2}-01-30&sort_by=popularity.desc&with_genres=${genre.replaceAll(',', '%2C')}`)
        }
        setNbPages(results.total_pages)
        if (results && results.results) {
            setMovieCollection(results.results);
        } else {
            console.error("Aucune donnée dans 'results'");
        }
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setPage(1);
            hydrateCollection()
        }, 500)
        return () => clearTimeout(timer);
    }, [year1, year2,genre]);

    const loadMovies = async () => {
        setIsLoading(true);
        let results: any
        if (genre === "") {
            results = await get(`/discover/movie?include_adult=false&include_video=false&language=fr-FR&page=${page}&primary_release_date.gte=${year1}-12-31&primary_release_date.lte=${year2}-12-31&sort_by=popularity.desc`);
        } else {
            results = await get(`/discover/movie?include_adult=false&language=fr-FR&page=${page}&primary_release_date.gte=${year1}-01-01&primary_release_date.lte=${year2}-01-30&sort_by=popularity.desc&with_genres=${genre.replaceAll(',', '%2C')}`)
        }
        if (results && results.results) {
            setMovieCollection(prev => [...prev, ...results.results]);
        }
        setIsLoading(false);
    };

    useEffect(() => {
        const scroll$ = fromEvent(window, 'scroll').pipe(
            debounceTime(300),
            switchMap(() => {
                if (loadMoreRef.current) {
                    const rect = loadMoreRef.current.getBoundingClientRect();
                    if (rect.top <= window.innerHeight && page <= nbPages) {
                        setPage(prevState => prevState + 1)
                    }
                }
                return [];
            })
        );

        const subscription = scroll$.subscribe();

        return () => subscription.unsubscribe();
    },);

    useEffect(() => {
        loadMovies()
    }, [page]);

    return (
        <ExpContext.Provider value={{year1, setYear1, year2, setYear2, genre, setGenre}}>
            <Page title={"Explorer"}>
                <main>
                    <aside>
                        <DrawerExplorer/>
                    </aside>

                    <section className="explorer-movie-container">
                        {!isPending && movieCollection &&
                            movieCollection.map((movie, index) => (<MovieItem key={index} movie={movie}/>))
                        }
                    </section>

                    <div id="detector-end-page" ref={loadMoreRef} style={{height:'auto'}}>
                    </div>
                </main>
            </Page>
        </ExpContext.Provider>
    );
};

export default Explorer;