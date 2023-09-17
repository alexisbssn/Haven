"use client"
import { usePathname } from "next/navigation"
import Searchbar from "./Searchbar/Searchbar"
import { Button } from "../ui/button"
import Link from "next/link"
import { guideForSupportersWebsiteUrl } from "@/lib/constants"
import Avatar from "../Avatar/Avatar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretDown } from "@fortawesome/free-solid-svg-icons"

/**
 * This is the navigation that you see when you are in the dashboard section of Haven.
 * There is a search bar visible if you are on the "/discover".
 */
export default function DashboardNavbar() {
  const pathname = usePathname()
  return (
    <nav className="relative flex items-center self-stretch p-4">
      <Searchbar />
      <div className="ml-auto flex items-center gap-x-5">
        <Button
          onClick={() => console.log("hey")}
          className="border-2 border-solid border-haven_blue bg-white px-3 py-6 text-base font-bold text-haven_blue hover:bg-slate-200"
        >
          Contact Haven
        </Button>
        <Link
          href={guideForSupportersWebsiteUrl}
          className="rounded-md border-2 border-solid border-haven_blue bg-white px-3 py-3 text-base font-bold text-haven_blue hover:bg-slate-200"
        >
          help Center
        </Link>
        <div className="flex items-center">
          <Avatar />
          <FontAwesomeIcon icon={faCaretDown} />
        </div>
      </div>
    </nav>
  )
}
