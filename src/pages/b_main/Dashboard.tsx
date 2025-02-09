import React, {FC, useContext, useEffect, useState} from 'react';
import Page from "../../components/Layout/Page";
import {MovieType} from "../../@types/MovieType";
import {UserContext} from "../../contexts/UserMovieContext";
import {useAuth} from "../../contexts/AuthentificationContext";
import {getFavoriteMovie, getToken, getUsername, saveFavoriteMovie, saveUsername} from "../../utilis/storage";
import {getCineDb} from "../../api/api";
import {UserType} from "../../@types/UserType";
import styles from "../../components/dashboard/dashboard.module.css";
import DashboardUserInfos from "../../components/dashboard/userInfos/DashboardUserInfos";
import DashboardLastMovie from "../../components/dashboard/lastMovie/DashboardLastMovie";
import DashboardFavoris from "../../components/dashboard/favoris/DashboardFavoris";
import DashboardList from "../../components/dashboard/list/DashboardList";
import {MovieShortType} from "../../@types/MovieShortType";



const DashBoard: FC = () => {
    const {state} = useAuth();
    const userToken = getToken();
    const [user, setUser] = useState<UserType>({email: "", username: "", role: ""});
    const [loading, setLoading] = useState<boolean>(true);

    const userContext = useContext(UserContext);
    const [favoriteMovie, setFavoriteMovie] = useState<MovieShortType[]>([]);
    const [seeingMovie, setSeeingMovie] = useState<MovieType[]>([]);

    const fetchUserData = async () => {
        try {
            setLoading(true);
            const response = await getCineDb(`/user/connected`, {headers: {Authorization: `Bearer ${userToken}`}});
            setUser(response);
            setLoading(false);
        } catch (error) {
            console.error('Erreur lors de la récupération des données utilisateur', error);
            setLoading(false);
        }
    };

    const fetchFavorite = async () => {
        try {
            setLoading(true);
            const response = await getCineDb(`/movie/favorite`, {headers: {Authorization: `Bearer ${userToken}`}});
            setFavoriteMovie(response);
            setLoading(false);
        } catch (error) {
            console.error('Erreur lors de la récupération des données utilisateur', error);
            setLoading(false);
        }
    };

    useEffect(() => {
        if (userToken) {
            fetchUserData();
            fetchFavorite()
        }
    }, [userToken]);

    useEffect(() => {
        saveFavoriteMovie(favoriteMovie);
        saveUsername(user.username);
    }, [favoriteMovie, user]);


    return (
        <Page title={"Détail"}>
            <div className={styles.main}>
                <DashboardUserInfos user={user}/>
                <DashboardLastMovie user={user}/>
                <DashboardFavoris list={favoriteMovie}/>
                <DashboardList user={user}/>
            </div>
        </Page>
    );
};

export default DashBoard;
