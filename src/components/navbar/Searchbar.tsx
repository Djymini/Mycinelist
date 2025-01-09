import * as React from 'react';
import {FC, useEffect, useState} from 'react';
import TextField from '@mui/material/TextField';
import {get} from "../../api/api";
import {Movies} from "../../@types/Movies";

const Searchbar: FC<{}> = ({}) => {
    const [movieSearch, setMovieSearch] = useState<Movies[]>([]);
    const [isPending, setIsPending] = useState<boolean>(false);
    const [query, setQuery] = useState<string>(''); // Etat pour la recherche
    const [isHoveringScroller, setIsHoveringScroller] = useState<boolean>(false);


    // Fonction pour hydrater la collection de films depuis l'API
    const hydrateCollection = async (key: string) => {
        setIsPending(true);
        try {
            let movieListResult = await get(`/search/movie?query=${key}&include_adult=false&language=fr-FR&page=1`);
            setMovieSearch(movieListResult.results); // Mise à jour de l'état avec les résultats
        } catch (error) {
            console.error('Error loading movies:', error);
        } finally {
            setIsPending(false);
        }
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            hydrateCollection(query);
        }, 1500); // Délai de 500ms

        return () => clearTimeout(timer); // Nettoyer le timer lors du démontage
    }, [query]);// Le useEffect est déclenché à chaque changement du query

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value); // Mise à jour du texte de recherche
    }

    const handleBlur = () => {
        if (!isHoveringScroller) {
            setQuery(''); // Réinitialiser le champ de recherche si on ne survole pas le scroller
        }
    };

    // Fonctions pour gérer l'entrée et la sortie du survol sur le scroller
    const handleMouseEnter = () => {
        console.log('MouseEnter');
        setIsHoveringScroller(true); // On survole le scroller
    };

    const handleMouseLeave = () => {
        console.log('MouseLeave');
        setIsHoveringScroller(false); // On ne survole plus le scroller
    };

    return (
        <>
            {/* Champ de recherche */}
            <TextField
                label="Recherche"
                id="input-search"
                value={query}
                onChange={handleChange}
                onMouseLeave={handleBlur}
                fullWidth
                disabled={isPending} // Désactive le champ pendant que les résultats sont en train de se charger
            />

            <ul className="scroller" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                {movieSearch.map((movie) => (
                    <li key={movie.id}>
                        <button type="button" onClick={() => window.location.href = `/MovieDetails/${movie.id}`}>
                            <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} height={'100px'}/>
                            <p>{movie.title}</p>
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Searchbar;



