import * as React from 'react';
import {FC, useEffect, useRef, useState} from 'react';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import {palletteColor} from "../../_styles/palletteColor";
import {searchBar, searchElement, searchInput, searchItem, searchScroller} from "../../_styles/navbarStyles";
import {get} from "../../api/api";
import {MovieType} from "../../@types/MovieType";
import IconButton from "@mui/material/IconButton";
import {useNavigate} from "react-router-dom";

const Searchbar: FC = () => {
    const navigate = useNavigate();

    const inputRef = useRef<HTMLInputElement | null>(null);

    const [searchBarActive, setSearchBarActive] = useState<boolean>(false);
    const [searchValue, setSearchValue] = useState<string>("");
    const [searchResult, setSearchResult] = useState<MovieType[]>([]);


    const SearchSelection = async () => {
        // @ts-ignore
        if (searchValue !== "") {
            let response = await get(`/search/movie?query=${searchValue}&include_adult=false&language=fr-FR&page=1`);
            let movieSelection = response.results;
            setSearchResult(movieSelection);
        }
        else {
            setSearchResult([]);
        }
    }

    const UpdateResearch = () => {
        if (inputRef.current){
            setSearchValue(inputRef.current.value);
        }
    }

    const DeleteResearch = () => {
        if (inputRef.current) {
            inputRef.current.value = "";
            setSearchValue(inputRef.current.value);
        }
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            SearchSelection();
        }, 400)
        return () => clearTimeout(timer);
    }, [searchValue]);

    return (
        <>
            {!searchBarActive ?
                    <button id="search-button-open-bar" onClick={() => setSearchBarActive(true)}>
                        <SearchIcon sx={{color: palletteColor.textColor, margin: 'auto', fontSize: '40px'}}/>
                    </button>
                :
                    <div id="search-bar" style={searchBar}>
                        <div id="search-element" style={searchElement}>
                            <input id="search-input" type="search" ref={inputRef} autoComplete="off" placeholder="Nom du film recherché" style={searchInput} onKeyUp={UpdateResearch}/>
                            <span id="search-item" style={searchItem}>
                                    {(inputRef.current?.value && inputRef.current.value !== "") ?
                                        <>
                                            <IconButton sx={{height: '40px', width: '40px', margin: 'auto'}}
                                                        onClick={DeleteResearch}>
                                                <CloseIcon sx={{color: palletteColor.textColor, fontSize: '40px'}}/>
                                            </IconButton>
                                        </>
                                        :
                                        <SearchIcon sx={{color: palletteColor.textColor, margin: 'auto 0', fontSize: '40px'}}/>
                                    }
                                    <span className="vertical-line" style={{borderLeft: '2px solid', height: '50%', margin: 'auto 16px'}}></span>
                                    <button id="search-button-close-bar" onClick={() => setSearchBarActive(false)}>Fermer</button>
                            </span>
                        </div>
                        {(inputRef.current?.value !== "" && inputRef.current?.value !== undefined) &&
                            <ul className="scroll-container" style={searchScroller}>
                                {(searchResult.length === 0) ?
                                    <>
                                        <p>Aucun résultat</p>
                                    </>
                                    :
                                    <>
                                        <h2 style={{margin: '8px 0 8px 12px'}}>Films</h2>
                                        {searchResult.map((movie) => (
                                            <li  key={movie.id}>
                                                <button className="search-scroll-item" type="button" onClick={() => navigate(`/MovieDetails/${movie.id}`)}>
                                                    <img alt={movie.title} src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} style={{height: '100px'}}/>
                                                    <p>{movie.title}</p>
                                                </button>
                                            </li>
                                        ))}
                                    </>
                                }
                            </ul>
                        }
                    </div>
            }
        </>
    );
};

export default Searchbar;



