import {removeToken, saveToken} from "../utilis/storage";

export interface AuthState {
    token: string | null;
}

export type AuthAction =
    | { type: 'LOGIN'; payload: { token: string } }
    | { type: 'LOGOUT' };

export const initialAuthState: AuthState = {
    token: null,
};

export const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case 'LOGIN':
            saveToken(action.payload.token); // Sauvegarder le token
            return {
                token: action.payload.token,
            };
        case 'LOGOUT':
            removeToken(); // Supprimer le token
            return {
                token: null,
            };
        default:
            return state;
    }
};