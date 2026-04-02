
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader } from "../ui/sidebar";
import AppSideBarContent from "./app-sidebar-content";
import Logout from "../logout-button";

export default function AppSideBar() {

    return <Sidebar>
        <SidebarHeader>header</SidebarHeader>
        <SidebarContent>
            <AppSideBarContent/>
        </SidebarContent>
        <SidebarFooter>
            <Logout/>
        </SidebarFooter>
    </Sidebar>
}