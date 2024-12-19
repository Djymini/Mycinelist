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
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
                <link
                    href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Hedvig+Letters+Sans&display=swap"
                    rel="stylesheet"/>
            </Helmet>
            {children}
        </Box>
    );
};

export default Page;
