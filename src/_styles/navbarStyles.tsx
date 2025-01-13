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

export const searchBar: CSSProperties = {
    position: 'absolute',
    right: '250px',
    backgroundColor: palletteColor.buttonColor,
    borderRadius: '24px',
    width: '500px',
    height: 'auto',
    zIndex: 99,
};

export const searchElement: CSSProperties = {
    padding: '0 16px',
    display: 'flex',
    justifyContent: 'space-between',
    width: 'auto',
    height: '56px',
}

export const searchItem: CSSProperties = {
    height: '100%',
    display: "flex",
}

export const searchInput: CSSProperties = {
    backgroundColor: "inherit",
    border: 'none',
    fontSize: '18px',
    width: '70%',
    fontFamily: "inherit",
    margin: 'auto 8px auto 0',
};

export const searchScroller: CSSProperties = {
    maxHeight: '500px',
    overflowY: 'scroll',
    listStyle: 'none',
    marginTop: '0',
    padding: 0,
    borderTop: `1px solid rgba(0, 0, 0, .6)`,
    scrollbarColor: palletteColor.textColor,
    scrollbarWidth: 'auto',
};