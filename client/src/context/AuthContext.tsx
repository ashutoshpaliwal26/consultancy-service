import React, { createContext, ReactNode, useCallback, useContext, useEffect, useState } from 'react'
import { apiClient } from '../components/config/api';
import { useNavigate } from 'react-router-dom';
import Loading from '../components/Loading';

interface AuthContextValueType {
    isAuthorized: boolean
    authenticate: (value: boolean) => void
    user: any,
    mainLoading: boolean,
    setLodingForPage: (value: boolean) => void
}

const AuthContextProvider = createContext<AuthContextValueType | null>(null);

export const useAuthenticate = () => {
    const context = useContext(AuthContextProvider);
    if (!context) {
        throw new Error("User Authenticate must be used within an AuthProvider");
    }
    return context;
};

interface AuthContextProps {
    children: ReactNode
}

const AuthContext: React.FC<AuthContextProps> = ({ children }) => {
    const [isAuthorized, setIsAuthorize] = useState<boolean>(false);
    const [user, setUser] = useState()
    const navigate = useNavigate();
    const [mainLoading, setMainLoading] = useState<boolean>(false);

    const setLodingForPage = (value: boolean) => {
        setMainLoading(value);
    }

    const authenticate = (value: boolean) => {
        const localUser = JSON.parse(localStorage.getItem("user") as string);
        setUser(localUser);
        setIsAuthorize(value);
    }

    const init = async () => {
        const token = JSON.parse(localStorage.getItem("token") as string);
        await checkUserPresent(token)
    }

    const checkUserPresent = async (token: string | undefined) => {
        try {
            const response = await apiClient.post("/token/verify/", { token }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            if (response.status === 200) {
                authenticate(true);
            }
        } catch (err) {
            authenticate(false);
        }
    }

    useEffect(() => {
        init();
    }, [])

    return (
        <AuthContextProvider.Provider value={{ user, isAuthorized, authenticate, mainLoading, setLodingForPage }}>
            {children}
        </AuthContextProvider.Provider>
    )
}

export default AuthContext;