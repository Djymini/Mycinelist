import {FC} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import Home from "../pages/b_main/Home";
import Explorer from "../pages/b_main/Explorer";
import LayoutWithBar from "../layouts/LayoutWithBar";
import MovieDetails from "../pages/b_main/MovieDetails";
import WithoutLayoutBar from "../layouts/WithoutLayoutBar";
import Login from "../pages/b_main/Login";
import Dashboard from "../pages/b_main/Dashboard";

const Router: FC<{}> = ({}) => {
    return (
        <Routes>
            <Route path="/" element={<LayoutWithBar isLogged={true}/>}>
                <Route path="/Dashboard" index element={<Dashboard/>}/>
                <Route path="/MovieDetails/:id" index element={<MovieDetails isLogged={true}/>}/>
                <Route path="/Explorer" index element={<Explorer/>}/>
                <Route path="/Home" index element={<Home isLogged={true}/>}/>
                <Route path="/" index element={<Home isLogged={true}/>}/>
            </Route>
            <Route path="/" element={<WithoutLayoutBar/>}>
                <Route path="/Login" index element={<Login/>}/>
            </Route>
        </Routes>
    );
};

export default Router;
