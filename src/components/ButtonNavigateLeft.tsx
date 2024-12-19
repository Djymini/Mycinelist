import React from 'react';
import {FC} from 'react';
import Button from '@mui/material/Button';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import {buttonSize} from "../_styles/ButtonNavigateStyle";


const ButtonNavigateLeft: FC<{}> = ({}) => {
    return (
        <Button variant="contained" sx={buttonSize}>
            <NavigateBeforeIcon sx={{fontSize: 80}}/>
        </Button>
    );
};

export default ButtonNavigateLeft;
