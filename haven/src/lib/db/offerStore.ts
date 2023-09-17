import { OfferModel } from "@/models/Offer"

import { Offer } from "@/dbTypes"
import dbConnect from "@/lib/dbConnect"
import { serialize } from "v8"
import { UserModel } from "@/models/User";

export default async function getAllOffers(): Promise<Offer[]> {
  try {
    UserModel;
    await dbConnect()
    const offers = await OfferModel.find({}).populate("creator").exec()
    //serialze offers to json before returning
    const offersJson = offers.map((offer) => offer.toJSON())
    return offersJson
  } catch (error) {
    console.log("there was an error fetching all product requests", error)
  }
  return []
}
