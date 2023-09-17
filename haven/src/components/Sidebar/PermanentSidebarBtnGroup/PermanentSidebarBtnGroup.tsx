"use client"
import { usePathname } from "next/navigation"
import SidebarBtn from "../SidebarBtn/SidebarBtn"
import { faHouse, faClipboardList, faGear } from "@fortawesome/free-solid-svg-icons"

/**
 * This is the group of Sidebar Buttons that will always be there no matter what
 */
export default function PermanentSidebarBtnGroup() {
  const pathname = usePathname()

  return (
    <div className="mt-10 flex flex-col gap-4 self-stretch">
      <SidebarBtn href="/dashboard/discover" text="Discover" icon={faHouse} pathName={pathname} />
      <SidebarBtn
        href="/dashboard/myDashboard"
        text="My Dashboard"
        icon={faClipboardList}
        pathName={pathname}
      />
      <SidebarBtn href="/dashboard/myProfile" text="My Profile" icon={faGear} pathName={pathname} />
    </div>
  )
}
