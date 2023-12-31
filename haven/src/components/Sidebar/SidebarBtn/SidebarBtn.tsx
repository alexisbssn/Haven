import { cn } from "@/lib/utils"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconProp } from "@fortawesome/fontawesome-svg-core"

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
