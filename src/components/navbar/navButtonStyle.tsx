import {CSSProperties} from 'react';
import {styled} from '@mui/material/styles';
import Button, {ButtonProps} from "@mui/material/Button";
import {palletteColor} from "../../_styles/palletteColor";

export const NavButton = styled(Button)<ButtonProps>(({}) => ({
    fontFamily: 'Chakra Petch, serif',
    fontWeight: 500,
    textTransform: 'none',
    height: '56px',
    fontSize: '25px',
    borderRadius: '24px',
    backgroundColor: palletteColor.buttonColor,
}));