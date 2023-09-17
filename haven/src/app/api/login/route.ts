import { loginUser } from "@/types"
import { loginValidator } from "@/validators/loginValidator"
import { NextRequest, NextResponse } from "next/server"
import { ZodError } from "zod"
import { DbUser } from "@/dbTypes"
import { UserModel } from "@/models/User"
import dbConnect from "@/lib/dbConnect"

export async function POST(request: NextRequest) {
  let requestUser: loginUser
  try {
    requestUser = await request.json()
    console.log(requestUser)
  } catch (error) {
    return NextResponse.json({ message: "failed to parse JSON object" }, { status: 400 })
  }
  let validateData: {
    email: string
    password: string
  }

  try {
    validateData = loginValidator.parse(requestUser)
  } catch (error) {
    const zodError = error as ZodError
    const errorMessage = zodError.errors.map((err) => err.message).join(", ")
    return NextResponse.json(
      { message: `Invalid data submitted, ${errorMessage}` },
      { status: 400 },
    )
  }

  const { email, password } = requestUser

  let user: DbUser | null
  try {
    await dbConnect()
    user = await UserModel.findOne({ email })
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 })
    }
    if (password !== user.password) {
      return NextResponse.json({message: "Incorrect password"}, {status: 400})
    }
    
  } catch (error) {
    console.log("something went wrong fetching the data from the database", error)
  }

  return NextResponse.json({ message: requestUser }, { status: 200 })
}
