import {createContext} from "react";


interface AuthContextExplorer {
    year1: number;
    setYear1: any;
    year2: number;
    setYear2: any;
    hydrateCollection: () => void;
    genre: string;
    setGenre: any;
}

export const AuthContextExp = createContext<AuthContextExplorer | undefined>(undefined);