import { NextRequest } from "next/server"
import { NextResponse } from "next/server"
import { ZodError } from "zod"
import { OfferTypeModel } from "@/models/OfferType"
import { signupValidator } from "@/validators/signupValidator"
import { DbOfferType, OfferCategory, OfferType } from "@/dbTypes"
import dbConnect from "@/lib/dbConnect"
import { offerTypeValidator } from "@/validators/offerTypeValidator"

export async function POST(request: NextRequest) {
  let requestOfferType: OfferType
  try {
    requestOfferType = await request.json()
  } catch (error) {
    return NextResponse.json({ message: "failed to parse JSON object" }, { status: 400 })
  }

  let validateData: {
    needsAdvancedVerification: boolean
    category: OfferCategory
    iconUrl: string
    iconWithLabelUrl: string
    description: string
  }

  try {
    validateData = offerTypeValidator.parse(requestOfferType)
  } catch (error) {
    const zodError = error as ZodError
    const errorMessage = zodError.errors.map((err) => err.message).join(", ")
    return NextResponse.json(
      { message: `Invalid data submitted, ${errorMessage}` },
      { status: 400 },
    )
  }

  const { needsAdvancedVerification, category, iconUrl, iconWithLabelUrl, description } =
    requestOfferType

  try {
    await dbConnect()
    const offerType: DbOfferType = new OfferTypeModel({
      needsAdvancedVerification,
      category,
      iconUrl,
      iconWithLabelUrl,
      description,
    })
    await offerType.save()
    return NextResponse.json({ message: "success" }, { status: 200 })
  } catch (error) {
    console.log("failed to create offerType in the database.", error)
    return NextResponse.error()
  }
}
