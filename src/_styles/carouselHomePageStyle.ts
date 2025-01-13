import {CSSProperties} from 'react';
import {palletteColor} from "./palletteColor";

export const carouselBackground: CSSProperties = {
    margin: '0',
    padding: '32px 0',
    backgroundImage: 'url("/homeBackground.jpg")',
    opacity: '0.6',
    filter: 'blur(8px)',
    width: '100%',
    height: '720px',
};

export const carouselHome: CSSProperties = {
    position: 'absolute',
    top: '48px',
    margin: '0',
    padding: '32px 0',
    width: '100%',
    height: 'auto',
};

export const h2CarouselHomePageStyle: CSSProperties = {
    fontWeight: '600',
    fontSize: '40px',
    width: '100%',
    textAlign: 'center',
    fontStyle: 'italic',
    color: palletteColor.textColor,
    marginTop: '256px',
    marginBottom: '8px',
    zIndex: 2,
};

export const carouselHomeElements: CSSProperties = {
    margin: '32px 0',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
}