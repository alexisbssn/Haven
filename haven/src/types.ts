import { UserType } from "./dbTypes"

export type LoginField = "email" | "password"

export type AvailableCities = ["Calgary", "Toronto", "Montreal"]

export type SignupUser = {
  _id?: string
  email: string
  firstName: string
  lastName: string
  type: UserType
  password: string
}

export type loginUser = {
  email: string
  password: string
}
