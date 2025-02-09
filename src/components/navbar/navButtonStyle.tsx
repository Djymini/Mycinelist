import {CSSProperties} from 'react';
import {styled} from '@mui/material/styles';
import Button, {ButtonProps} from "@mui/material/Button";
import {palletteColor} from "../../_styles/palletteColor";


export const NavButton = styled(Button)<ButtonProps>(({theme}) => ({
    fontFamily: 'Chakra Petch, serif',
    padding: '0 1.6vw',
    width: '23.4vw',
    fontWeight: 500,
    textTransform: 'none',
    height: '5.6vw', // Valeur par défaut pour les petits écrans
    fontSize: '2.5vw', // Valeur par défaut pour les petits écrans
    borderRadius: '2.4vw', // Valeur par défaut pour les petits écrans
    backgroundColor: palletteColor.buttonColor,
    '& .MuiButton-startIcon': {
        fontSize: '3vw', // Taille de l'icône
        marginRight: '0.8vw',
        marginLeft: '-0.4vw'
    },
    '& .MuiSvgIcon-root': {
        fontSize: '3vw',
    },

    // Breakpoints pour les écrans plus larges
    [theme.breakpoints.up('lg')]: {
        padding: '0 16px',
        width: '234px',
        height: '56px', // Pour les grands écrans
        fontSize: '25px', // Pour les grands écrans
        borderRadius: '24px', // Pour les grands écrans
        '& .MuiButton-startIcon': {
            fontSize: '30px', // Taille de l'icône
            marginRight: '8px',
            marginLeft: '-4px'
        },
        '& .MuiSvgIcon-root': {
            fontSize: '30px',
        },
    },
}));

export const buttonStyles = {
    height: {
        xs: '5.6vw',  // Taille pour les écrans petits (ex : téléphone)
        lg: '56px',  // Taille pour les grands écrans (ex : ordinateurs)
    },
    width: {
        xs: '5.6vw',
        lg: '56px',
    },
    backgroundColor: palletteColor.buttonColor,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
};

export const iconStyles = {
    fontSize: {
        xs: '4.5vw',  // Taille de l'icône pour petits écrans
        lg: '45px',  // Taille de l'icône pour grands écrans
    },
    color: palletteColor.textColor,
    marginLeft: {
        xs: '0.4vw',
        lg: '4px',
    },
};