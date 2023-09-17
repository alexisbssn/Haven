import { findHavenWebsiteUrl } from "@/lib/constants"
import AdminSidebarBtnGroup from "./AdminSidebarBtnGroup/AdminSidebarBtnGroup"
import havenLogo from "@/assets/png/haven-logo.png"
import Image from "next/image"
import Link from "next/link"
import PermanentSidebarBtnGroup from "./PermanentSidebarBtnGroup/PermanentSidebarBtnGroup"




/**
 * This is the Sidebar
 */
export default function Sidebar() {
  return (
    <section className="flex h-screen w-64 shrink-0 flex-col items-center bg-haven_blue px-3">
      <Link href={findHavenWebsiteUrl} className="mt-2">
        <Image src={havenLogo} alt="logo" width={150} />
      </Link>
      <PermanentSidebarBtnGroup />
      <AdminSidebarBtnGroup />
    </section>
  )
}
