import {FC} from 'react';
import {Outlet} from "react-router-dom";
import Header from "../pages/a_header/Header";
import Footer from "../pages/c_footer/Footer";

const LayoutWithBar: FC<{}> = ({}) => {
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    );
};

export default LayoutWithBar;
