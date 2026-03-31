'use client'
import { createContext, ReactNode, useState } from "react"

export type AuthContextProviderProp = {
    children: ReactNode
}

export type AuthContextProp = {
    isLogin: boolean,
    setLogin: (state: boolean) => void,
    user?: object,
    setUser?: () => {}
}

export const AuthContext = createContext<AuthContextProp>({ isLogin: false, setLogin: () => {}})

export default function AuthContextProvider({ children } : AuthContextProviderProp){
    const [ isLogin, setLogin ] = useState<boolean>(false);

    return <AuthContext value={ {isLogin, setLogin}}>
        { children }
    </AuthContext>
}