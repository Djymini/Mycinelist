import {CSSProperties} from 'react';
import {palletteColor} from "./palletteColor";

export const carouselBackground: CSSProperties = {
    margin: '0 0 88px 0',
    backgroundImage: 'url("/homeBackground.jpg")',
    padding: '32px 0',
    opacity: '0.6',
    filter: 'blur(8px)',
    width: '100%',
    height: '75vh',
};

export const carouselHome: CSSProperties = {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '32px 0',
    top: '88px',
    margin: '0',
    width: '100%',
    height: '75vh',
};

export const h2CarouselHomePageStyle: CSSProperties = {
    fontWeight: '600',
    fontSize: '40px',
    width: '100%',
    textAlign: 'center',
    fontStyle: 'italic',
    color: palletteColor.textColor,
    margin: 'auto 0',
    zIndex: 2,
};

export const carouselHomeElements: CSSProperties = {
    margin: '32px 0',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
}