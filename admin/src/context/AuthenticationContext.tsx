import React, { createContext, useEffect, useState } from 'react'
import { apiClient } from '../config/api';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

interface AuthContext {
    user: any | null
    setUserData: (payload: any) => void
}

const AuthenticationProtection = createContext<AuthContext | null>(null);

interface AuthenticatioInter {
    children: React.ReactNode
}

const AuthenticationContext: React.FC<AuthenticatioInter> = ({ children }) => {
    const [user, setUser] = useState();
    const [loading, isLoading] = useState<boolean>();
    const [token, setToken] = useState<string | null>("");
    const naviage = useNavigate();

    const setUserData = (payload: any) => {
        setUser(payload);
    }

    const getCookie = async () => {
        let tokenData: string | undefined = Cookies.get('uuid');
        await checkUserPresent(tokenData);
    }

    const checkUserPresent = async (token: string | undefined) => {
        try {
            const responce = await apiClient.post("/token/verify/", {token},  {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            if (responce.status === 200 && responce.data.status === 200) {
                return;
            }
        } catch (err) {
            naviage("/login");
        }
    }

    useEffect(() => {
        getCookie();
    }, [])

    return (
        <AuthenticationProtection.Provider value={{ user, setUserData }}>
            {children}
        </AuthenticationProtection.Provider>
    )
}

export default AuthenticationContext