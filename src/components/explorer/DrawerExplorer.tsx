import React, {useState, FC} from 'react';
import Box from '@mui/material/Box';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import MailIcon from '@mui/icons-material/Mail';
import {DrawerSearch, DrawerStyledInputBase} from "../../_styles/drawerStyles";
import DrawerCheckBoxList from "../home/DrawerCheckBoxList";
import {GenreData} from "../../_data/GenreData";
import TimeFilter from "../home/TimeFilter";



const DrawerExplorer: FC<{}> = ({}) => {

    return (
        <Box sx={{width: '20vw', padding: '0 40px 0 16px'}} role="presentation">
            <h3>Filtres</h3>
            <Divider/>
            <h4>Texte</h4>
            <DrawerSearch>
                <DrawerStyledInputBase
                    placeholder="Search…"
                    inputProps={{'aria-label': 'search'}}
                />
            </DrawerSearch>
            <Divider/>
            <DrawerCheckBoxList/>
            <Divider/>
            <h4>Date</h4>
            <TimeFilter/>

        </Box>
    );
};

export default DrawerExplorer;
