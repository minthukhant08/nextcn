import AppSideBar from "@/components/app-side-bar"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import { ReactNode} from "react"

type PrivateLayoutProp = {
    children: ReactNode
}

export default async function PrivateLayout({ children }: PrivateLayoutProp) {
    const session = await getServerSession()

    if (!session?.user){
        redirect("/")
    }
    
    return (
        <SidebarProvider>
            <AppSideBar />
            <SidebarTrigger />
            {children}
        </SidebarProvider>
    )
}