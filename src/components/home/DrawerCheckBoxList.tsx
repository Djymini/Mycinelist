import React, {useState, FC} from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {GenreData} from "../../_data/GenreData";
import Box from "@mui/material/Box";

const DrawerCheckBoxList: FC<{}> = ({}) => {
    const movieGenre = GenreData
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <Box >
            <ListItemButton onClick={handleClick} sx={{padding: '0'}}>
                <h4>Genres</h4>
                {open ? <ExpandLess/> : <ExpandMore/>}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <FormGroup sx={{marginLeft:'24px'}}>
                    {movieGenre.map(genre => (<FormControlLabel control={<Checkbox sx={{color: '#E0E1DD'}}/>} label={genre.name}/>))}
                </FormGroup>
            </Collapse>
        </Box>
    );
};

export default DrawerCheckBoxList;
