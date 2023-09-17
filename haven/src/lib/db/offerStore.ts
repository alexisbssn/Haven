import { OfferModel } from "@/models/Offer"
import { Offer } from "@/dbTypes"
import dbConnect from "@/lib/dbConnect"


export default async function getAllOffers(): Promise<Offer[]> {
  try {
    await dbConnect()
    const offers = await OfferModel.find({}).populate("creator").exec() as Offer[]
    return offers
  } catch (error) {
    console.log("there was an error fetching all product requests", error)
  }

  return []
}
