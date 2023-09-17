import OfferCard from "@/components/Cards/OfferCard/OfferCard"
import OfferDialog from "@/components/Cards/OfferDialog/OfferDialog"
import ProfileCard from "@/components/Cards/ProfileCard/ProfileCard"
import { AlertDialog, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import getAllOffers from "@/lib/db/offerStore"
import getAllUsers from "@/lib/db/userStore"
import DashboardNavbar from "../../../components/DashboardNavbar/DashboardNavbar"

export default async function Page() {
  const offers = await getAllOffers()
  const users = await getAllUsers()

  return (
    <section className="overflow-y-scroll">
      <DashboardNavbar/>
      <div>Offers:</div>
      <div>
        {offers.map((offer) => (
          <AlertDialog key={offer._id}>
            <OfferDialog offer={offer} />
            <AlertDialogTrigger>
              <OfferCard offer={offer} />
            </AlertDialogTrigger>
          </AlertDialog>
        ))}
      </div>

      <div>Users:</div>
      <div className="flex w-fit flex-wrap">
        {users.map((user) => (
          <ProfileCard key={user._id} user={user} />
        ))}
      </div>
    </section>
  )
}
