'use client'
import AppSideBar from "@/components/app-side-bar"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AuthContext } from "@/providers/auth-context-provider"
import { useRouter } from "next/navigation"
import { ReactNode, useContext, useEffect } from "react"

type PrivateLayoutProp = {
    children: ReactNode
}

export default function PrivateLayout({ children }: PrivateLayoutProp) {
    const { isLogin } = useContext(AuthContext)
    const router = useRouter()

    useEffect(() => {
        if (!isLogin) {
            router.push('/')
        }
    }, [isLogin, router])

    if (!isLogin) {
        return null // or loading spinner
    }

    return (
        <SidebarProvider>
            <AppSideBar />
            <SidebarTrigger />
            {children}
        </SidebarProvider>
    )
}