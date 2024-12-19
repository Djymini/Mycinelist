import React, {Children} from 'react';
import {FC} from 'react';
import Box from "@mui/material/Box";
import {Helmet} from "react-helmet-async";

const Page: FC<{ children: any, title: string }> = ({children, title}) => {
    return (
        <Box>
            <Helmet>
                <title>{title}</title>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link
                    href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                    rel="stylesheet"/>
            </Helmet>
            {children}
        </Box>
    );
};

export default Page;
