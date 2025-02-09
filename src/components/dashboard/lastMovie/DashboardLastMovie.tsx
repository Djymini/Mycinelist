import React, {FC} from 'react';
import {UserType} from "../../../@types/UserType";
import styles from "../dashboard.module.css";

const DashboardLastMovie: FC<{user: UserType}> = ({user}) => {
    return (
        <section className={styles.lastMovie}>
            <h3>Dernier film vue</h3>
        </section>
    );
};

export default DashboardLastMovie;
