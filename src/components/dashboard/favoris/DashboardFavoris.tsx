import React, {FC} from 'react';
import {UserType} from "../../../@types/UserType";
import styles from "../dashboard.module.css";
import CarouselList from "../../carouselList/CarouselList";
import {MovieShortType} from "../../../@types/MovieShortType";
import CarouselDashboard from "../../carouselDashboard/CarouselDashboard";

const DashboardFavoris: FC<{list: MovieShortType[] }> = ({list}) => {
    return (
        <section className={styles.favoris}>
            <h3>Film favoris</h3>
            <CarouselDashboard name={"Film favoris"} item={list}/>
        </section>
    );
};

export default DashboardFavoris;