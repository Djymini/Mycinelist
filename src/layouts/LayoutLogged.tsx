import {FC} from 'react';
import Header from "../components/Header";
import {Outlet} from "react-router-dom";

const LayoutLogged: FC<{}> = ({}) => {
    return (
        <>
            <Header/>
            <Outlet/>
        </>
    );
};

export default LayoutLogged;
