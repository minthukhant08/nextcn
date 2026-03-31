'use client'

import { AuthContext } from "@/providers/auth-context-provider"
import { useContext } from "react"

export default function Settings(){
    const { isLogin, setLogin } = useContext(AuthContext)

    return <div>setting {isLogin}</div>
}