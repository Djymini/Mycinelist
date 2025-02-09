import {palletteColor} from "../../_styles/palletteColor";

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

export const searchIconStyles = {
    color: palletteColor.textColor,
    margin: 'auto',
    fontSize: {
        xs: '4vw',
        lg: '40px'
    }
}

export const iconButtonStyles = {
    height: {
        xs: '4vw',
        lg: '40px'
    },
    width: {
        xs: '4vw',
        lg: '40px'
    },
    margin: 'auto'
}

export const closeIconStyles = {
    color: palletteColor.textColor,
    fontSize: {
        xs: '4vw',
        lg: '40px'
    }
}

export const searchIconStyles2 = {
    color: palletteColor.textColor,
    margin: 'auto 0',
    fontSize: {
        xs:'4vw',
        lg:'40px'
    }
}