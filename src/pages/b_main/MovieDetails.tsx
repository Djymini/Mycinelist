import React, {FC, useEffect, useState, useTransition} from 'react';
import Page from "../../components/Layout/Page";
import {useParams} from "react-router-dom";
import {get} from "../../api/api";
import {MovieType} from "../../@types/MovieType";
import {CastType} from "../../@types/CastType";
import CarouselDetails from "../../components/others/CarouselDetails";
import {
    asideDiv, asideH4,
    asideMovieDetails, asideP,
    detailsMovie,
    detailsMovieGenres, detailsMovieH3,
    detailsMovieImage,
    detailsMovieInfos,
    detailsMovieInfosH2,
    detailsMovieInfosH3,
    detailsMovieInfosImage, detailsMovieInfosP, detailsMovieSynopsis,
    detailsMovieTimes, watchProviderContainer
} from "../../_styles/movieDetailStyle";
import {changeTheDate, displayHoursAndMinutes} from "../../_managers/displayManager";
import {WatchProvider} from "../../@types/WatchProvider";
import {ImageMovie} from "../../@types/ImageMovie";
import ImageListItem from "@mui/material/ImageListItem";
import ImageList from "@mui/material/ImageList";
import CarouselDetails2 from "../../components/others/CarouselDetails2";
import {palletteColor} from "../../_styles/palletteColor";

const MovieDetails: FC<{isLogged:boolean}> = ({isLogged}) => {
    const [movie, setMovie] = useState<MovieType>();
    const [cast, setCast] = useState<CastType[]>([]);
    const [crew, setCrew] = useState<CastType[]>([]);
    const [watchFlatrate, setWatchFlatrate] = useState<WatchProvider[]>([]);
    const [watchRent, setWatchRent] = useState<WatchProvider[]>([]);
    const [watchBuy, setWatchBuy] = useState<WatchProvider[]>([]);
    const [frDisponibility, setFrDisponibility] = useState<any>(undefined);
    const [imageMovie, setImageMovie] = useState<ImageMovie[]>([]);
    const [isPending, startTransition] = useTransition()
    const {id} = useParams();
    const path = "https://image.tmdb.org/t/p/original"


    const MovieDisplay = async () => {
        // @ts-ignore
        let movie = await get(`/movie/${id}?language=fr-FR`);
        let castCollection = await get(`/movie/${id}/credits?language=fr-FR`);
        let watchProvider = await get(`/movie/${id}/watch/providers`);
        console.log(watchProvider.results);
        let imageMovie = await get(`/movie/${id}/images?include_image_language=null`);
        const array = imageMovie.backdrops

        setMovie(movie);
        setCast(castCollection.cast);
        setCrew(castCollection.crew);
        setFrDisponibility(watchProvider?.results.FR || undefined);
        setWatchRent(watchProvider?.results.FR.rent || undefined);
        setWatchFlatrate(watchProvider?.results.FR.flatrate|| undefined);
        setWatchBuy(watchProvider?.results.FR.buy || undefined);
        setImageMovie(array.filter((img: ImageMovie) => img.width > img.height));
    }

    useEffect(() => {
        MovieDisplay();
    }, [id]);

    useEffect(() => {
        console.log(frDisponibility);
    }, [frDisponibility]);

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
                                    <p style={detailsMovieTimes}>{`${displayHoursAndMinutes(movie.runtime)}`}</p>
                                    <p style={detailsMovieGenres}>{`${movie.genres.map((item) => item.name).join(', ')}`}</p>
                                    <div style={detailsMovieSynopsis}>
                                        <h3 style={detailsMovieInfosH3}>Synopsis</h3>
                                        <p style={detailsMovieInfosP}>{movie.overview}</p>
                                    </div>
                                </div>
                            </section>

                            <section style={{padding: '0 32px'}}>
                                <aside style={asideMovieDetails}>
                                    <div style={asideDiv}>
                                        <h3 style={detailsMovieH3}>Titre d'origine</h3>
                                        <p style={asideP}>{movie.original_title}</p>
                                    </div>
                                    <div style={asideDiv}>
                                        <h3 style={detailsMovieH3}>Date de sortie</h3>
                                        <p style={asideP}>{changeTheDate(movie.release_date)}</p>
                                    </div>
                                    <div style={asideDiv}>
                                        <h3 style={detailsMovieH3}>Disponibilités</h3>
                                        {frDisponibility === undefined ?
                                            <p>Pas disponible sur les plateformes Française</p>
                                            :
                                            <>
                                                <div style={watchProviderContainer}>
                                                    <h4 style={asideH4}>Streaming avec abonnement</h4>
                                                    {watchFlatrate === undefined ?
                                                        <p>Disponible sur aucune plateforme en France</p>
                                                        :
                                                        watchFlatrate.map((element, index) => (
                                                            <img src={path + element.logo_path} style={{
                                                                width: '64px',
                                                                borderRadius: '16px',
                                                                margin: '8px 0 8px 16px'
                                                            }} key={index}/>))
                                                    }
                                                </div>
                                                <div style={watchProviderContainer}>
                                                    <h4 style={asideH4}>Location</h4>
                                                    {watchRent === undefined ?
                                                        <p>Disponible sur aucune plateforme en France</p>
                                                        :
                                                        watchRent.map((element, index) => (
                                                            <img src={path + element.logo_path} style={{
                                                                width: '64px',
                                                                borderRadius: '16px',
                                                                margin: '8px 0 8px 16px'
                                                            }} key={index}/>))
                                                    }
                                                </div>
                                                <div style={watchProviderContainer}>
                                                    <h4 style={asideH4}>Achat</h4>
                                                    {watchBuy === undefined ?
                                                        <p>Disponible sur aucune plateforme en France</p>
                                                        :
                                                        watchBuy.map((element, index) => (
                                                            <img src={path + element.logo_path} style={{
                                                                width: '64px',
                                                                borderRadius: '16px',
                                                                margin: '8px 0 8px 16px'
                                                            }} key={index}/>))
                                                    }
                                                </div>
                                            </>
                                        }
                                    </div>
                                </aside>
                                <div className="carousel-details">
                                    <CarouselDetails2 name={"Equipe"} item={crew.filter(item => item.known_for_department !== "Acting")}/>
                                </div>

                                <div className="carousel-details">
                                    <CarouselDetails name={"Acteurs"} item={cast}/>
                                </div>

                                <ImageList sx={{width: 'auto', height: '560px', marginTop: '100px'}} cols={3} rowHeight={280}>
                                    {imageMovie.map((item, index) => (
                                        <ImageListItem key={index}>
                                            <img src={path + item.file_path} alt={"image film"} loading="lazy"/>
                                        </ImageListItem>
                                    ))}
                                </ImageList>
                            </section>
                        </>
                    }
                </main>
        </Page>
    );
};

export default MovieDetails;
