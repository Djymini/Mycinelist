import {CSSProperties} from "react";
import {palletteColor} from "./palletteColor";

export const detailsMovieImage: CSSProperties = {
    position: 'absolute',
    width: '100%',
    height: '450px',
    overflow: 'hidden',
    opacity: '50%',
}

export const detailsMovie: CSSProperties = {
    position: 'relative',
    top: '175px',
}

export const detailsMovieInfos: CSSProperties = {
    top: '100px',
    padding: '32px',
    display: 'grid',
    gridTemplateColumns: '1fr 5fr',
    gridTemplateRows: 'auto auto 1fr',
    gridTemplateAreas: `
        "img title"
        "img info"
        "img synopsis"
    `,
}

export const detailsMovieInfosImage: CSSProperties = {
    width: '300px',
    marginRight: '32px',
    gridArea: 'img',
    borderRadius: '16px',
}

export const detailsMovieInfosH2: CSSProperties = {
    margin: '0 0 8px 0',
    gridArea: 'title',
    fontSize: '40px',
    textShadow: `1px 1px 4px ${palletteColor.backgroundColor}`,
}

export const detailsMovieInfosDiv: CSSProperties = {
    margin: '0 0 16px 0',
    gridArea: 'synopsis',
}

export const detailsMovieInfosH3: CSSProperties = {
    fontSize: '30px',
    textShadow: `1px 1px 4px ${palletteColor.backgroundColor}`,
    margin: '100px 0 4px 0',
}

export const detailsMovieInfosP: CSSProperties = {
    fontSize: '25px',
    textShadow: `1px 1px 4px ${palletteColor.backgroundColor}`,
    margin: '0',
}

export const detailsMovieInfosSpecifics: CSSProperties = {
    margin: '0 0 16px 0',
    gridArea: 'info',
    fontSize: '20px',
    fontStyle: 'italic',
    textShadow: `1px 1px 4px ${palletteColor.backgroundColor}`,  // Correct usage
}
