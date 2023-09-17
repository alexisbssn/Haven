import OfferCard from "@/components/Cards/OfferCard/OfferCard"
import ProfileCard from "@/components/Cards/ProfileCard/ProfileCard"
import getAllOffers from "@/lib/db/offerStore"
import getAllUsers from "@/lib/db/userStore"

export default async function Page() {
  const offers = await getAllOffers()
  const users = await getAllUsers()

  return (
    <div className="overflow-scroll">
      <div>Offers:</div>
      <div>
        {offers.map((offer) => (
          <OfferCard key={offer._id} offer={offer} />
        ))}
      </div>

      <div>Users:</div>
      <div className="flex w-fit flex-wrap">
        {users.map((user) => (
          <ProfileCard key={user._id} user={user} />
        ))}
      </div>
    </div>
  )
}
