import { OfferModel } from "@/models/Offer"
import { User } from "@/dbTypes"
import dbConnect from "@/lib/dbConnect"
import { UserModel } from "@/models/User"

export default async function getAllUsers(): Promise<User[]> {
  try {
    await dbConnect()

    const users = (await UserModel.find({}).exec()) as User[]
    return users
  } catch (error) {
    console.log("there was an error fetching all product requests", error)
  }

  return []
}
