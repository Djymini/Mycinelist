import React, {CSSProperties} from 'react';
import {palletteColor} from "./palletteColor";


export const carouselHome: CSSProperties = {
    margin: '8px auto',
    backgroundColor: palletteColor.backgroundColor,
    width: '1786px',
    height: '784px',
    padding: '1px 16px 0 16px',
    borderRadius: '16px',
};

export const h2CarouselHomePageStyle: CSSProperties = {
    fontWeight: '600',
    fontSize: '40px',
    width: '100%',
    textAlign: 'center',
    fontStyle: 'italic',
    color: palletteColor.textColor,
    marginTop: '8px',
    marginBottom: '8px',
};

export const carouselHomeElements: CSSProperties = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
}