import { Document, Types } from "mongoose"

type LoginField = "email" | "password"

export type UserType = "refugee" | "supporter"

/**This type is used for the types of a comment*/
export interface User {
	_id?: string
	email: string
	firstName: string
	lastName: string
	type: UserType
}
