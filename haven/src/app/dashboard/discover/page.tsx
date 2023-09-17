import OfferCard from "@/components/Cards/OfferCard/OfferCard"
import ProfileCard from "@/components/Cards/ProfileCard/ProfileCard"
import getAllOffers from "@/lib/db/offerStore"
import getAllUsers from "@/lib/db/userStore"

export default async function Page() {
  const offers = await getAllOffers()
  const users = await getAllUsers()

  return (
    <div>
      <div>Offers:</div>
      <div>
        {offers.map((offer) => (
          <OfferCard key={offer._id} offer={offer} />
        ))}
      </div>

      <div>Users:</div>
      <div>
        {users.map((user) => (
          <ProfileCard key={user._id} user={user} />
        ))}
      </div>
    </div>
  )
}
