import React, {FC, useContext, useEffect, useState} from 'react';
import Page from "../../components/Layout/Page";
import {MovieType} from "../../@types/MovieType";
import {UserContext} from "../../contexts/UserMovieContext";
import CarouselList from "../../components/Dashboard/CarouselList";

const DashBoard: FC = () => {
    const userContext = useContext(UserContext);
    const [favoriteMovie, setFavoriteMovie] = useState<MovieType[]>([]);
    const [seeingMovie, setSeeingMovie] = useState<MovieType[]>([]);
    console.log(userContext?.favoriteMovie);

    useEffect(() => {
        const savedFavorites = localStorage.getItem('favoriteMovies');
        if (savedFavorites) {
            setFavoriteMovie(JSON.parse(savedFavorites));
        }
    }, []);

    return (
        <Page title={"Détail"}>
            <main>
                <div className="details-movie-image">
                    {favoriteMovie[0] ? (
                        <img src={`https://image.tmdb.org/t/p/original${favoriteMovie[0].backdrop_path}`}
                             width={'100%'}/>
                    ) : (
                        <span></span>
                    )}
                </div>
                <section className={"details-movie"}>
                    <div className={"details-movie-infos"}>
                        <img src="/placeholder-image-person-jpg.jpg" alt="Placeholder Person"
                             width={'300px'}/>
                        <h2>User</h2>
                        <p className="details-movie-specifics">fan de film</p>
                        <div>
                            <h3>Presentation</h3>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the industry's standard dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make a type specimen book. It has
                                survived not only five centuries, but also the leap into electronic typesetting,
                                remaining essentially unchanged. It was popularised in the 1960s with the release of
                                Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                                publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                        </div>
                    </div>
                </section>
                <div className="carousel-details-staff">
                    <CarouselList name={"Films Favoris"} item={favoriteMovie}/>
                </div>
                <div className="carousel-details-acteur">
                    <CarouselList name={"Films vus"} item={seeingMovie}/>
                </div>
            </main>
        </Page>
    );
};

export default DashBoard;
