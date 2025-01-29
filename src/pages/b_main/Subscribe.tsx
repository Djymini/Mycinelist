import React, {useEffect, useState, useTransition} from 'react';
import {FC} from 'react';
import Page from "../../components/Layout/Page";
import SubscribeForm from "../../components/Subscribe/SubscribeForm";

const MyComponent: FC<{}> = ({}) => {
    return (
        <Page title={"Inscription"}>
            <SubscribeForm/>
        </Page>
    );
};

export default MyComponent;
