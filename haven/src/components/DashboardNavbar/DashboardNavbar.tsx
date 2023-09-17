import Searchbar from "./Searchbar/Searchbar";







/**
 * This is the navigation that you see when you are in the dashboard section of Haven.
 * There is a search bar visible if you are on the "/discover".
 */
export default function DashboardNavbar() {
  return (
    <nav className="flex relative p-4">
      <Searchbar/>

      <span className="ml-auto">test</span>
    </nav>
  )
}
