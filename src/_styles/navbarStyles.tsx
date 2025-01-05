import * as React from 'react';
import InputBase from "@mui/material/InputBase";
import {styled, alpha} from '@mui/material/styles';
import Button, {ButtonProps} from "@mui/material/Button";

const buttonColor = '#415A77';

export const Search = styled('div')(({theme}) => ({
    position: 'relative',
    borderRadius: '28px',
    backgroundColor: buttonColor,
    marginRight: theme.spacing(2),
    marginLeft: 0,
    marginTop: 'auto',
    marginBottom: 'auto',
    width: '360px',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

export const SearchIconWrapper = styled('div')(({theme}) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

export const StyledInputBase = styled(InputBase)(({theme}) => ({
    fontFamily: 'Chakra Petch, serif',
    fontWeight: 500,
    fontSize: '25px',
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

export const NavButton = styled(Button)<ButtonProps>(({theme}) => ({
    fontFamily: 'Chakra Petch, serif',
    fontWeight: 500,
    textTransform: 'none',
    height: '56px',
    fontSize: '25px',
    borderRadius: '24px',
    backgroundColor: buttonColor,
}));