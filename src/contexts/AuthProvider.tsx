'use client'
import React, { useState, createContext, ReactNode, useContext, useEffect } from "react";

export interface AuthContextType {
    user: any,
    setUser: any
}

interface AuthContextProviderProps {
    children: ReactNode;
}

export const AuthContext = createContext<AuthContextType>({
    user: null,
    setUser: () => { }
});

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({ children }) => {
    const [user, setUser] = useState(null);
    return (
        <AuthContext.Provider value={{
            user,
            setUser
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = () => useContext(AuthContext);