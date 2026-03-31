import AppSideBar from "@/components/app-side-bar"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { ReactNode} from "react"

type PrivateLayoutProp = {
    children: ReactNode
}

export default function PrivateLayout({ children }: PrivateLayoutProp) {

    return (
        <SidebarProvider>
            <AppSideBar />
            <SidebarTrigger />
            {children}
        </SidebarProvider>
    )
}