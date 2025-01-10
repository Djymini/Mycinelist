import {CSSProperties} from 'react';
import {styled} from '@mui/material/styles';
import Button, {ButtonProps} from "@mui/material/Button";
import {palletteColor} from "./palletteColor";

export const NavButton = styled(Button)<ButtonProps>(({}) => ({
    fontFamily: 'Chakra Petch, serif',
    fontWeight: 500,
    textTransform: 'none',
    height: '56px',
    fontSize: '25px',
    borderRadius: '24px',
    backgroundColor: palletteColor.buttonColor,
}));

export const navbarElement: CSSProperties = {
    display: 'flex',
};

export const navbarElementNav: CSSProperties = {
    margin: 'auto 0',
};

export const navbarElementA: CSSProperties = {
    textDecoration: 'none',
    color: 'inherit',
    margin: '0 16px 0 0',
};

export const navbarScroller: CSSProperties = {
    padding: 0,
    backgroundColor: palletteColor.buttonColor,
    position: 'absolute',
    zIndex: 10,
    left: '30%',
    top: '36px',
    width: '600px',
    height: 'auto',
    maxHeight: '450px',
    overflowY: 'scroll',
    scrollbarColor: palletteColor.textColor,
    scrollbarWidth: 'auto',
    borderRadius: '5px',
    boxShadow: '8px 8px 16px 8px var(black)',
};

export const navbarScrollerList: CSSProperties = {
    listStyle: 'none',
};

export const navbarScrollerButtonP: CSSProperties = {
    margin: 'auto 0 auto 8px',
};