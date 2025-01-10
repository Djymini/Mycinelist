import {FC} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import Home from "../pages/b_main/Home";
import Explorer from "../pages/b_main/Explorer";
import LayoutWithBar from "../layouts/LayoutWithBar";
import MovieDetails from "../pages/b_main/MovieDetails";
import WithoutLayoutBar from "../layouts/WithoutLayoutBar";
import Login from "../pages/b_main/Login";
import Dashboard from "../pages/b_main/Dashboard";

const NoAuthentificationRouter: FC<{}> = ({}) => {
    return (
        <Routes>
            <Route path="/" element={<LayoutWithBar isLogged={false}/>}>
                <Route path="/MovieDetails/:id" index element={<MovieDetails isLogged={false}/>}/>
                <Route path="/Explorer" index element={<Explorer/>}/>
                <Route path="/Home" index element={<Home isLogged={false}/>}/>
                <Route path="/" index element={<Home isLogged={false}/>}/>
            </Route>
            <Route path="/" element={<WithoutLayoutBar/>}>
                <Route path="/Login" index element={<Login/>}/>
            </Route>
        </Routes>
    );
};

export default NoAuthentificationRouter;