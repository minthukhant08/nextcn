import { useSidebar } from "../ui/sidebar"

export default function SideBarControl() {
       const {
    state,
    open,
    setOpen,
    openMobile,
    setOpenMobile,
    isMobile,
    toggleSidebar,
  } = useSidebar()
    return <div>
        <button onClick={toggleSidebar}>{isMobile ? 'open' : 'close'}Sidebar</button>
    </div>
}