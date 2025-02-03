import React, {FC} from 'react';
import Box from "@mui/material/Box";
import {CircularProgress} from "@mui/material";

const Loading: FC<{}> = ({}) => {
    return (
        <Box sx={{display: 'flex', margin: 'auto'}}>
            <CircularProgress size="150px"/>
        </Box>
    );
};

export default Loading;
