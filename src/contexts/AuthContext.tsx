import {createContext} from "react";


interface AuthContextProps {
    isLogged: boolean;
    setIsLogged: any;
}

export const AuthContext = createContext<AuthContextProps | undefined>(undefined);