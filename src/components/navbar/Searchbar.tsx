import * as React from 'react';
import {FC} from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

const Searchbar: FC<{}> = ({}) => {
    return (
         <Paper component="form" sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 360, borderRadius: '28px', padding: '0 12px' }}>
             <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Rechercher" inputProps={{ 'aria-label': 'search google maps' }}/>
             <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                 <SearchIcon />
             </IconButton>
         </Paper>
    );
};

export default Searchbar;
