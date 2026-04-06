import {  Home, Settings, ShoppingCart, User, } from "lucide-react";
import { getServerSession } from "next-auth";
import { ReactNode } from "react";
import { SidebarMenuItem } from "../ui/sidebar";
import { authOptions } from "@/app/api/auth/[...nextauth]/next-auth-options";
import Link from "next/link";

type MenuItem = {
    url: string,
    icon: ReactNode,
    label: string
    roles: Roles[]
}

const routes: Array<MenuItem> = [
    {
        icon: <Home />,
        label: "Account",
        url: "/accounts",
        roles: ["USER", "ADMIN"]
    },
    {
        icon: <User />,
        label: "Profile",
        url: "/profile",
        roles: ["USER"]
    },
    {
        icon: <Settings />,
        label: "Settings",
        url: "/settings",
        roles: ["USER", "ADMIN"]
    },
    {
        icon: <ShoppingCart />,
        label: "Proudcts",
        url: "/products",
        roles: ["USER"]
    },
];

const checkAccess = ( user_roles: Roles[], menu_roles: Roles[]) => {
    let hasAccess = false;
    menu_roles.map((r) => {
        if (user_roles.includes(r)){
            hasAccess = true
        }
    })
    return hasAccess
}

export default async function AppSideBarContent() {
     const session = await getServerSession(authOptions)
     return <>
        {
        routes.map((route, index) =>checkAccess( session?.user.roles!, route.roles) ?  <SidebarMenuItem key={index}> <Link href={route.url}><div className="flex">{route.icon} {route.label}</div></Link> </SidebarMenuItem> : <></>)
     }
     </>
}