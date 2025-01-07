import React, {useEffect, useState, useTransition} from 'react';
import {FC} from 'react';
import Page from "../../components/Layout/Page";
import LoginForm from "../../components/login/LoginForm";

const MyComponent: FC<{}> = ({}) => {
    return (
        <Page title={"Connexion"}>
            <LoginForm />
        </Page>
    );
};

export default MyComponent;
