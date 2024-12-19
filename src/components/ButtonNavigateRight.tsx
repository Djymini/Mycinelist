import React from 'react';
import {FC} from 'react';
import Button from '@mui/material/Button';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import {buttonSize} from "../_styles/ButtonNavigateStyle";



const ButtonNavigateRight: FC<{ changeCarousel: any }> = ({changeCarousel}) => {
    return (
        <Button variant="contained" sx={buttonSize} onClick={changeCarousel}>
            <NavigateNextIcon sx={{fontSize:80}}/>
        </Button>
    );
};

export default ButtonNavigateRight;
