import React, {FC, useEffect, useState, useTransition} from 'react';
import Page from "../../components/Layout/Page";
import {useParams} from "react-router-dom";
import {get} from "../../api/api";
import {MovieType} from "../../@types/MovieType";
import {CastType} from "../../@types/CastType";
import CarouselDetails from "../../components/others/CarouselDetails";
import {
    detailsMovie,
    detailsMovieImage,
    detailsMovieInfos, detailsMovieInfosDiv, detailsMovieInfosH2, detailsMovieInfosH3,
    detailsMovieInfosImage, detailsMovieInfosP, detailsMovieInfosSpecifics
} from "../../_styles/movieDetailStyle";
import {changeTheDate, displayHoursAndMinutes} from "../../_functions/displayManager";

const MovieDetails: FC<{isLogged:boolean}> = ({isLogged}) => {
    const [movie, setMovie] = useState<MovieType>();
    const [cast, setCast] = useState<CastType[]>([]);
    const [crew, setCrew] = useState<CastType[]>([]);
    const [isPending, startTransition] = useTransition()
    const {id} = useParams();

    const hydrateMovie = () => {
        // @ts-ignore
        startTransition(async () => {
            let movie = await get(`/movie/${id}?language=fr-FR`);
            let castCollection = await get(`/movie/${id}/credits?language=fr-FR`);

            startTransition(() => {
                setMovie(movie);
                setCast(castCollection.cast);
                setCrew(castCollection.crew);
            })
        })
    }

    useEffect(() => {
        hydrateMovie();
    }, [id]);


    return (
        <Page title={"Détail"}>
                <main>
                    {!isPending && movie && cast &&
                        <>
                            <div className="details-movie-image" style={detailsMovieImage}>
                                <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} width={'100%'}/>
                            </div>

                            <section className="details-movie" style={detailsMovie}>
                                <div className="details-movie-infos" style={detailsMovieInfos}>
                                    <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} style={detailsMovieInfosImage}/>
                                    <h2 style={detailsMovieInfosH2}>{movie.title}</h2>
                                    <p className="details-movie-specifics" style={detailsMovieInfosSpecifics}>{`${changeTheDate(movie.release_date)} - ${displayHoursAndMinutes(movie.runtime)}, ${movie.genres.map((item) => item.name).join(', ')}`}</p>
                                    <div style={detailsMovieInfosDiv}>
                                        <h3 style={detailsMovieInfosH3}>Synopsis</h3>
                                        <p style={detailsMovieInfosP}>{movie.overview}</p>
                                    </div>
                                </div>
                            </section>

                            <div className="carousel-details-staff">
                                <CarouselDetails name={"Equipe technique"} item={crew.filter(item => item.known_for_department !== "Acting")} />
                            </div>

                            <div className="carousel-details-acteur">
                                <CarouselDetails name={"Acteurs"} item={cast} />
                            </div>
                        </>
                    }
                </main>
        </Page>
    );
};

export default MovieDetails;
