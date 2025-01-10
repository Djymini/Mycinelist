import {createContext} from "react";


interface ExplorerContext {
    year1: number;
    setYear1: any;
    year2: number;
    setYear2: any;
    hydrateCollection: () => void;
    genre: string;
    setGenre: any;
}

export const ExpContext = createContext<ExplorerContext | undefined>(undefined);