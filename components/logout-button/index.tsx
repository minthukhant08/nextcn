'use client'
import { signOut } from "next-auth/react";
import { Button } from "../ui/button";
import { logout } from "./action";

export default function Logout(){
    const handleLogout = () => {
        signOut()
        // logout().then(() => signOut())
        
    }
    return <Button  onClick={handleLogout} >Logout</Button>
}