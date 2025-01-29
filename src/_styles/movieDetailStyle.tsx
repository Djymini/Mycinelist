import {CSSProperties} from "react";
import {palletteColor} from "./palletteColor";

export const detailsMovieH3: CSSProperties = {
    fontSize: '30px',
    margin: '0',
}

export const detailsMovieImage: CSSProperties = {
    position: 'absolute',
    width: '100%',
    height: '500px',
    overflow: 'hidden',
    opacity: '25%',
}

export const detailsMovie: CSSProperties = {
    position: 'relative',
    top: '250px',
    marginBottom: '350px',
}

export const detailsMovieInfos: CSSProperties = {
    top: '100px',
    padding: '32px',
    display: 'grid',
    gridTemplateColumns: '1fr 5fr',
    gridTemplateRows: 'auto auto auto 1fr',
    gridTemplateAreas: `
        "img title"
        "img times"
        "img genres"
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
    margin: '0',
    gridArea: 'title',
    fontSize: '45px',
}

export const detailsMovieTimes: CSSProperties = {
    margin: '0',
    gridArea: 'times',
    fontSize: '22px',
    fontStyle: 'italic',
}

export const detailsMovieGenres: CSSProperties = {
    margin: '0',
    gridArea: 'genres',
    fontSize: '22px',
    fontStyle: 'italic',
}

export const detailsMovieSynopsis: CSSProperties = {
    width: '100%',
    margin: '0',
    gridArea: 'synopsis',
}

export const detailsMovieInfosH3: CSSProperties = {
    fontSize: '30px',
    fontStyle: 'italic',
    margin: '95px 0 4px 0',
}

export const detailsMovieInfosP: CSSProperties = {
    fontSize: '25px',
    margin: '0',
}

export const asideMovieDetails: CSSProperties = {
    float: 'right',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    width: '20%',
    marginLeft: '32px',
    paddingLeft: '16px',
    borderLeft: '1px solid' + palletteColor.buttonColor,
}

export const asideDiv: CSSProperties = {
    margin: '0 0 64px 0',
}

export const asideP: CSSProperties = {
    fontStyle: 'italic',
    margin: '0',
    fontSize: '25px',
}

export const asideH4: CSSProperties = {
    fontStyle: 'italic',
    margin: '8px 0 0 0',
    fontSize: '25px',
}

export const watchProviderContainer: CSSProperties = {
    margin: '0 0 32px 0',
}