import { NextRequest } from "next/server"
import { NextResponse } from "next/server"
import { ZodError } from "zod"
import { OfferModel } from "@/models/Offer"
import { signupValidator } from "@/validators/signupValidator"
import { DbOffer, OfferCategory, Offer, User } from "@/dbTypes"
import dbConnect from "@/lib/dbConnect"
import { offerValidator } from "@/validators/offerValidator"
import { Types } from "mongoose"

export async function POST(request: NextRequest) {
  let requestOffer
  try {
    requestOffer = await request.json()
    requestOffer.availabilityDate = new Date(requestOffer.availabilityDate)
  } catch (error) {
    return NextResponse.json({ message: "failed to parse JSON object" }, { status: 400 })
  }

  let validateData: {
    description: string
    type: string
    creator: string
    availabilityDate: Date
    pictureUrl: string
  }

  try {
    validateData = offerValidator.parse(requestOffer)
  } catch (error) {
    const zodError = error as ZodError
    const errorMessage = zodError.errors.map((err) => err.message).join(", ")
    return NextResponse.json(
      { message: `Invalid data submitted, ${errorMessage}` },
      { status: 400 },
    )
  }

  const { description, type, creator, availabilityDate, pictureUrl } = requestOffer

  try {
    await dbConnect()

    const offer: DbOffer = new OfferModel({
      _id: new Types.ObjectId(),
      description,
      type,
      creator,
      availabilityDate,
      pictureUrl,
      status: "Open",
      order: 1,
      createdAt: new Date(),
    })

    await offer.save()
    return NextResponse.json({ message: "success" }, { status: 200 })
  } catch (error) {
    console.log("failed to create offer in the database.", error)
    return NextResponse.error()
  }
}
