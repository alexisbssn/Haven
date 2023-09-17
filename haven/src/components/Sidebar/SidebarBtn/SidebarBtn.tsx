import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import house from "@/assets/svg/house.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { usePathname } from "next/navigation"

type Props = {
  href: string
  text: string
  className?: string
  icon: IconProp
  pathName: string
}

/**
 * This is the button that you see in the sidebar when it is expanded
 */
export default function SidebarBtn({ href, text, className, icon, pathName }: Props) {
  console.log(pathName === href)
  return (
    <Link
      href={href}
      className={cn(
        "rounded-lg px-2 py-2 text-white transition-colors duration-75 hover:text-haven_yellow",
        className,
        {
          "bg-haven_yellow hover:text-white": pathName === href,
        },
      )}
    >
      <FontAwesomeIcon icon={icon} className="mr-4" />
      <span className="text-base">{text}</span>
    </Link>
  )
}
