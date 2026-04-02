'use client'
import { Backpack, BarChart, Bell, CreditCard, Home, LogOut, Mail, Settings, ShoppingCart, User, Users } from "lucide-react";
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarHeader, SidebarMenuItem } from "../ui/sidebar";
import Link from "next/link";
import { ReactNode } from "react";
import { Button } from "../ui/button";
import { useLoginStore } from "@/template/login/store";
import { useRouter } from "next/navigation";

type MenuItem = {
    url: string,
    icon: ReactNode,
    label: string
    roles: Array<"ADMIN" | "USER" | "SUPER_ADMIN">
}

const routes: Array<MenuItem> = [
    {
        icon: <Home />,
        label: "Home",
        url: "/home",
        roles: ["USER", "ADMIN", "SUPER_ADMIN"]
    },
    {
        icon: <User />,
        label: "Profile",
        url: "/profile",
        roles: ["USER", "SUPER_ADMIN"]
    },
    {
        icon: <Settings />,
        label: "Settings",
        url: "/settings",
        roles: ["SUPER_ADMIN"]
    },
    {
        icon: <ShoppingCart />,
        label: "Proudcts",
        url: "/products",
        roles: ["SUPER_ADMIN"]
    },
];
export default function AppSideBar() {
    const user_role = "SUPER_ADMIN"
    const { setEmail } = useLoginStore()
    const router = useRouter()
    const handleLogout = () => {
        setEmail("")
        router.replace("/")
    }
    return <Sidebar>
        <SidebarHeader>header</SidebarHeader>
        <SidebarContent>
            {
                routes.map( (route, index) =>  route.roles.includes(user_role) ? <SidebarMenuItem key={index}> <Link href={route.url}><div className="flex">{route.icon} {route.label}</div></Link> </SidebarMenuItem> : <></>)
            }
        </SidebarContent>
        <SidebarFooter>
            <Button onClick={handleLogout}>Logout</Button>
        </SidebarFooter>
    </Sidebar>
}