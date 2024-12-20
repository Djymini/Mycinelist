import React, {FC} from 'react';
import {useTranslation} from "react-i18next";
import CarouselHomePage from "../components/CarouselHomePage";
import Page from "../Manager/Page";
import FormLogin from "../components/FormLogin";

const Login: FC<{}> = ({}) => {
    return (
        <Page title={"Connexion"}>
            <body>
            <FormLogin/>
            </body>
        </Page>
    );
};

export default Login;
