import { NextRequest } from "next/server"
import { NextResponse } from "next/server"
import { ZodError } from "zod"
import connectMongoose from "@/lib/dbConnect"
import { UserModel } from "@/models/User"
import { signupValidator } from "@/validators/signupValidator"
import { DbUser, User, UserType } from "@/dbTypes"

export async function POST(request: NextRequest) {
	let requestUser: User
	try {
		requestUser = await request.json()
	} catch (error) {
		return NextResponse.json({ message: "failed to parse JSON object" }, { status: 400 })
	}


	let validateData: {
		email: string
		firstName: string
		lastName: string
		type: UserType
		password: string
	}

	try {
		validateData = signupValidator.parse(requestUser)
	} catch (error) {
		const zodError = error as ZodError
		const errorMessage = zodError.errors.map((err) => err.message).join(", ")
		return NextResponse.json(
			{ message: `Invalid data submitted, ${errorMessage}` },
			{ status: 400 }
		)
	}
	
	const { email, firstName, lastName, type } = requestUser

	try {
		await connectMongoose()
		const user: DbUser = new UserModel({
			email,
			firstName,
			lastName,
			type,

		})
		await user.save()
		return NextResponse.json({ message: "success" }, { status: 200 })
	} catch (error) {
		console.log("failed to create user in the database.", error)
		return NextResponse.error()
	}
}
