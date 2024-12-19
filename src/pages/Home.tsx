import React from 'react';
import {FC} from 'react';
import CarouselHomePage from "../components/CarouselHomePage";
import Header from "../components/Header";
import Page from "../Manager/Page";

const Home: FC<{}> = ({}) => {
    return (
        <Page title={"Accueil"}>
            <Header/>
            <body>
            <CarouselHomePage/>
            </body>
        </Page>
    );
};

export default Home;
