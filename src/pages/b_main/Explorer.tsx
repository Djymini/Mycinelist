import React, {useState, FC, useTransition, useEffect} from 'react';
import MovieItem from "../../components/explorer/MovieItem";
import DrawerExplorer from "../../components/explorer/DrawerExplorer";
import Page from "../../components/Layout/Page";
import {get} from "../../api/api";
import {Movies} from "../../@types/Movies";
import {AuthContextExp} from "../../contexts/AuthContextExplorer";

interface MovieCollection {
    results: Movies[];
}

const Explorer: FC<{}> = ({}) => {
    const [movieCollection, setMovieCollection] = useState<MovieCollection | undefined>(undefined)
    const [year1, setYear1] = useState(1894)
    const [year2, setYear2] = useState(2025)
    const [genre, setGenre] = useState("")
    const [isPending, startTransition] = useTransition()

    function hydrateCollection() {
        // @ts-ignore
        startTransition(async () => {
            let result = await get(`/discover/movie?include_adult=false&language=fr-FR&page=1&primary_release_date.gte=${year1}-01-01&primary_release_date.lte=${year2}-01-30&sort_by=popularity.desc&with_genres=${genre.replaceAll(',', '%7C')}',`)
            startTransition(() => {
                setMovieCollection(result)
                console.log("result", result)
            })
        })
    }

    useEffect(() => {
        hydrateCollection()
    }, []);

    return (
        <AuthContextExp.Provider value={{year1, setYear1, year2, setYear2, hydrateCollection, genre, setGenre}}>
            <Page title={"Explorer"}>
                <main>
                    <aside>
                        <DrawerExplorer/>
                    </aside>
                    <section className="explorer-movie-container">
                        {!isPending && movieCollection &&
                            movieCollection.results.map((movie, index) => (<MovieItem key={index} movie={movie}/>))
                        }
                    </section>
                </main>
            </Page>
        </AuthContextExp.Provider>
    );
};

export default Explorer;
