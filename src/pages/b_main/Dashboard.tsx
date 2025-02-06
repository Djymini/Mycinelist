import React, {FC, useContext, useEffect, useState} from 'react';
import Page from "../../components/Layout/Page";
import {MovieType} from "../../@types/MovieType";
import {UserContext} from "../../contexts/UserMovieContext";
import CarouselList from "../../components/Dashboard/CarouselList";
import {useAuth} from "../../contexts/AuthentificationContext";
import {getToken} from "../../utilis/storage";
import {getCineDb} from "../../api/api";

interface cineUser {
    email: string;
    username: string;
    role: string;
}

const DashBoard: FC = () => {
    const {state} = useAuth();
    const userToken = getToken();
    const [user, setUser] = useState<cineUser>({email: "default", username: "default", role: "default"});
    const [loading, setLoading] = useState<boolean>(true);

    const userContext = useContext(UserContext);
    const [favoriteMovie, setFavoriteMovie] = useState<MovieType[]>([]);
    const [seeingMovie, setSeeingMovie] = useState<MovieType[]>([]);

    useEffect(() => {
        console.log(userToken);
        if (userToken) {
            const fetchUserData = async () => {
                try {
                    setLoading(true);
                    const response = await getCineDb(`/user/connected`, {headers: {Authorization: `Bearer ${userToken}`}});
                    console.log(response);
                    setUser(response);
                    setLoading(false);
                } catch (error) {
                    console.error('Erreur lors de la récupération des données utilisateur', error);
                    setLoading(false);
                }
            };

            fetchUserData();
        }
    }, [userToken, setFavoriteMovie, setSeeingMovie]);


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
                            <h3>{user.username}</h3>
                            <p>
                                {user.email}
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
