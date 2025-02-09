import React, {FC} from 'react';
import {UserType} from "../../../@types/UserType";
import styles from "../dashboard.module.css";

const DashboardUserInfo: FC<{user: UserType}> = ({user}) => {
    return (
        <section className={styles.userInfo}>
            <h2> Tableau de bord</h2>
            <div className={styles.illustrationUser}>
                <div>
                    {user.username.charAt(0).toUpperCase()}
                </div>
            </div>
            <h3>{user.username}</h3>
            <div>
                <h4>Films vues</h4>
                <p>0</p>
            </div>
            <div>
                <h4>Films recommandés</h4>
                <p>0</p>
            </div>
            <div>
                <h4>Films non recommandés</h4>
                <p>0</p>
            </div>
        </section>
    );
};

export default DashboardUserInfo;
