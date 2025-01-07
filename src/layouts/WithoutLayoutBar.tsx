import {FC} from 'react';
import {Outlet} from "react-router-dom";

const LayoutWithBar: FC<{}> = ({}) => {
    return (
        <>
            <Outlet/>
        </>
    );
};

export default LayoutWithBar;