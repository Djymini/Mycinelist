import {FC} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import Home from "../pages/b_main/Home";
import Explorer from "../pages/b_main/Explorer";
import LayoutWithBar from "../layouts/LayoutWithBar";

const Router: FC<{}> = ({}) => {
    return (
        <Routes>
            <Route path="/" element={<LayoutWithBar/>}>
                <Route path="/Explorer" index element={<Explorer/>}/>
                <Route path="/Home" index element={<Home/>}/>
                <Route path="/" index element={<Home/>}/>
            </Route>
        </Routes>
    );
};

export default Router;
