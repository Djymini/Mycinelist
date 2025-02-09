import React, {FC} from 'react';
import {UserType} from "../../../@types/UserType";
import styles from "../dashboard.module.css";

const DashboardList: FC<{ user: UserType }> = ({user}) => {
    return (
        <section className={styles.list}>
            <h3>Mes listes</h3>
        </section>
    );
};

export default DashboardList;