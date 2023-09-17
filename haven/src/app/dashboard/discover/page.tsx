import OfferCard from "@/components/Cards/OfferCard/OfferCard"
import getAllOffers from "@/lib/db/offerStore"

export default async function Page() {
  const offers = await getAllOffers()
  // display an OfferCard for each offer

  return (
    <div>
      <div>Offers:</div>
      <div>
        {offers.map((offer) => (
          <OfferCard key={offer._id} offer={offer} />
        ))}
      </div>
    </div>
  )
}
