"use client"

import { usePathname } from "next/navigation"
import SidebarBtn from "../SidebarBtn/SidebarBtn"
import { faWrench, faUser, faGears } from "@fortawesome/free-solid-svg-icons"

export default function AdminSidebarBtnGroup() {
  const pathname = usePathname()
  return (
    <div className="mt-8 flex flex-col gap-4 self-stretch">
      <h3 className="text-white">Admin</h3>
      <SidebarBtn href="/dashboard/accounts" text="Accounts" icon={faWrench} pathName={pathname} />
      <SidebarBtn href="/dashboard/security" text="Security" icon={faUser} pathName={pathname} />
      <SidebarBtn
        href="/dashboard/admin-settings"
        text="Admin settings"
        icon={faGears}
        pathName={pathname}
      />
    </div>
  )
}
