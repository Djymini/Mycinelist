import * as React from 'react';
import {FC, useEffect, useRef, useState} from 'react';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import {get} from "../../api/api";
import {MovieType} from "../../@types/MovieType";
import IconButton from "@mui/material/IconButton";
import {useNavigate} from "react-router-dom";
import styles from "../searchbar/Searchbar.module.css"
import {closeIconStyles, iconButtonStyles, searchIconStyles, searchIconStyles2,} from "./searchBarStyle";

const Searchbar: FC<{ userIsConnected: boolean }> = ({userIsConnected}) => {
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
                    <button className={!userIsConnected ? styles.searchButtonOpenBar : styles.searchButtonOpenBarConnected} onClick={() => setSearchBarActive(true)}>
                        <SearchIcon sx={searchIconStyles}/>
                    </button>
                :
                    <div className={!userIsConnected ? styles.searchbar : styles.searchbarConnected}>
                        <div className={styles.searchElement}>
                            <input className={styles.searchInput} type="search" ref={inputRef} autoComplete="off" placeholder="Nom du film recherché" onKeyUp={UpdateResearch}/>
                            <span className={styles.searchItem}>
                                    {(inputRef.current?.value && inputRef.current.value !== "") ?
                                        <>
                                            <IconButton sx={iconButtonStyles} onClick={DeleteResearch}>
                                                <CloseIcon sx={closeIconStyles}/>
                                            </IconButton>
                                        </>
                                        :
                                        <SearchIcon sx={searchIconStyles2}/>
                                    }
                                    <span className={styles.verticalLine}></span>
                                    <button className={styles.searchButtonCloseBar} onClick={() => setSearchBarActive(false)}>Fermer</button>
                            </span>
                        </div>

                        {(inputRef.current?.value !== "" && inputRef.current?.value !== undefined) &&
                            <ul className={styles.searchScroller}>
                                {(searchResult.length === 0) ?
                                    <>
                                        <p>Aucun résultat</p>
                                    </>
                                    :
                                    <>
                                        <h2>Films</h2>
                                        {searchResult.map((movie) => (
                                            <li  key={movie.id}>
                                                <button className={styles.searchScrollItem} type="button" onClick={() => {
                                                    navigate(`/MovieDetails/${movie.id}`)
                                                    setSearchBarActive(false)
                                                }}>
                                                    <img alt={movie.title} src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}/>
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



