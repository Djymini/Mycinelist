import React, {useState, FC} from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import DrawerCheckBoxList from "../home/DrawerCheckBoxList";
import TimeFilter from "../home/TimeFilter";



const DrawerExplorer: FC<{}> = () => {

    return (
        <Box sx={{width: '20vw', padding: '0 40px 0 16px'}} role="presentation">
            <h3>Filtres</h3>
            <Divider/>
            <DrawerCheckBoxList/>
            <Divider/>
            <h4>Date</h4>
            <TimeFilter />
        </Box>
    );
};

export default DrawerExplorer;
