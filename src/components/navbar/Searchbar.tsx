import * as React from 'react';
import {FC, useEffect, useState} from 'react';
import TextField from '@mui/material/TextField';
import {get} from "../../api/api";
import {Movies} from "../../@types/Movies";
import {palletteColor} from "../../_styles/palletteColor";
import {navbarScroller, navbarScrollerButtonP, navbarScrollerList} from "../../_styles/navbarStyles";

const Searchbar: FC = () => {
    const [movieSearch, setMovieSearch] = useState<Movies[]>([]);
    const [isPending, setIsPending] = useState<boolean>(false);
    const [query, setQuery] = useState<string>(''); // Etat pour la recherche
    const [isHoveringScroller, setIsHoveringScroller] = useState<boolean>(false);
    const [isHoveringSearchBar, setIsHoveringSearchBar] = useState<boolean>(false);


    const updateProposition = async (key: string) => {
        setIsPending(true);
        try {
            let movieListResult = await get(`/search/movie?query=${key}&include_adult=false&language=fr-FR&page=1`);
            setMovieSearch(movieListResult.results);
        } catch (error) {
            console.error('Error loading movies:', error);
        } finally {
            setIsPending(false);
        }
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            updateProposition(query);
        }, 1000);

        return () => clearTimeout(timer);
    }, [query]);

    useEffect(() => {
        eraseSearchBarText()
    }, [isHoveringSearchBar, isHoveringScroller]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    }

    const eraseSearchBarText = () => {
        if (!isHoveringScroller && !isHoveringSearchBar) {
            setQuery('');
        }
    };

    const handleMouseEnterScroller = () => {
        setIsHoveringScroller(true);
    };

    const handleMouseLeaveScroller = () => {
        setIsHoveringScroller(false);
    };

    const handleMouseEnterSearchBar = () => {
        setIsHoveringSearchBar(true);
    };

    const handleMouseLeaveSearchBar = () => {
        setIsHoveringSearchBar(false);
    };

    return (
        <>
            <TextField
                label="Recherche"
                id="input-search"
                value={query}
                onChange={handleChange}
                onMouseEnter={handleMouseEnterSearchBar}
                onMouseLeave={handleMouseLeaveSearchBar}
                fullWidth
                disabled={isPending}
                style={{backgroundColor: palletteColor.buttonColor, borderRadius: '32px', marginLeft: '16px', width: '300px'}}
            />

            <ul className="scroller" style={navbarScroller} onMouseEnter={handleMouseEnterScroller} onMouseLeave={handleMouseLeaveScroller}>
                {movieSearch.map((movie) => (
                    <li key={movie.id} style={navbarScrollerList}>
                        <button type="button" onClick={() => window.location.href = `/MovieDetails/${movie.id}`}>
                            <img alt={movie.title} src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} height={'100px'}/>
                            <p style={navbarScrollerButtonP}>{movie.title}</p>
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Searchbar;



