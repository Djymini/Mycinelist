import {FC} from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import LayoutLogged from "../layouts/LayoutLogged";

const Router: FC<{}> = ({}) => {
    return (
        <Routes>
            <Route path="/" element={<LayoutLogged/>}>
                <Route path="/Home" element={<Home/>}/>
            </Route>
        </Routes>
    );
};

export default Router;
