import React, {useState, FC} from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import DrawerCheckBoxList from "../home/DrawerCheckBoxList";
import TimeFilter from "../home/TimeFilter";
import {palletteColor} from "../../_styles/palletteColor";



const DrawerExplorer: FC<{}> = () => {

    return (
        <Box sx={{width: '20vw', padding: '16px 40px 32px 16px', backgroundColor: palletteColor.buttonColor, borderRadius: '24px'}} role="presentation">
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
