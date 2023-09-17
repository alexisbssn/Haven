import { User } from "@/dbTypes"
import dbConnect from "@/lib/dbConnect"
import { UserModel } from "@/models/User"

export default async function getAllUsers(): Promise<User[]> {
  try {
    UserModel;
    await dbConnect()
    const users = UserModel.find()
    return users
  } catch (error) {
    console.log("there was an error fetching all product requests", error)
  }
  return []
}
