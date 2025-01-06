import React, {FC} from 'react';
import {Helmet} from "react-helmet-async";
import Box from "@mui/material/Box";

const Page: FC<{ children: any, title: string }> = ({children, title}) => {
    return (
        <Box>
            <Helmet>
                <title>{title}</title>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link
                    href="https://fonts.googleapis.com/css2?family=Chakra+Petch:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Goldman:wght@400;700&display=swap"
                    rel="stylesheet"/>
            </Helmet>
            {children}
        </Box>
    );
};

export default Page;
