import OfferCard from "@/components/Cards/OfferCard/OfferCard"
import OfferDialog from "@/components/Cards/OfferDialog/OfferDialog"
import DashboardNavbar from "@/components/DashboardNavbar/DashboardNavbar"
import { AlertDialog, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import getAllOffers from "@/lib/db/offerStore"
import getAllUsers from "@/lib/db/userStore"

export default async function Page() {
  const offers = await getAllOffers()

  return (
    <section className="grow overflow-scroll">
      <DashboardNavbar />
      {Array.from(Array(100).keys()).map((_) =>
        offers.map((offer) => (
          <AlertDialog key={offer._id}>
            <OfferDialog offer={offer} />
            <AlertDialogTrigger className="m-5 flex-wrap rounded-xl bg-white drop-shadow-lg hover:bg-slate-100">
              <OfferCard offer={offer} />
            </AlertDialogTrigger>
          </AlertDialog>
        )),
      )}
    </section>
  )
}
