import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

/**
 * This is the search bar that is inside the Dashboard Navigation bar
 */
export default function Searchbar() {
  return (
    <div className="flex cursor-pointer rounded-xl border border-solid border-black p-3 items-center grow max-w-[640px] mr-5">
      <FontAwesomeIcon icon={faMagnifyingGlass} className="mr-4"/>
      <span className="font-semibold text-base">
        
      </span>
    </div>
  )
}
