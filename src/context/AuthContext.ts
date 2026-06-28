import { createContext } from "react";

// 1. التعاريف والعقد
export interface AuthContextProps {
    user: string | null;
    token: string | null;
    login: (userData: string, tokenData: string) => void;
    logout: () => void;
    loading: boolean;
	isAuthenticated: boolean;
}

// 2. خلق الصندوق وتصديره حاف
export const AuthContext = createContext<AuthContextProps | undefined>(undefined);