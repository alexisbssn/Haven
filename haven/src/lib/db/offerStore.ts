import { OfferModel } from "@/models/Offer"
import { Offer } from "@/types"
import dbConnect from "@/lib/dbConnect"
import { UserModel } from "@/models/User"
UserModel

export default async function getAllOffers(): Promise<Offer[]> {
  try {
    await dbConnect()

    const offers = await OfferModel.find({}).populate("creator").exec()
    return offers
  } catch (error) {
    console.log("there was an error fetching all product requests", error)
  }

  return []
}
