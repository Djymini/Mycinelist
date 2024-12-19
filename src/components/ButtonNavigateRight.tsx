import React from 'react';
import {FC} from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const buttonSize = {
    width: '68px',
    height: '120px',
    borderRadius: '5px',
};

const ButtonNavigateRight: FC<{}> = ({}) => {
    return (
        <Button variant="contained" sx={buttonSize}>
            <NavigateNextIcon sx={{fontSize:80}}/>
        </Button>
    );
};

export default ButtonNavigateRight;
