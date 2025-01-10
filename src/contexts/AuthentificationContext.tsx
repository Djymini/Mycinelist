import {createContext, Dispatch, useContext} from "react";
import {AuthAction, AuthState} from "../reducer/LoginReducer";

interface AuthentificationContext {
    state: AuthState;
    dispatch: Dispatch<AuthAction>;
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};



export const AuthContext = createContext<AuthentificationContext | undefined>(undefined);