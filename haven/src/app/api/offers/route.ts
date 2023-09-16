import { NextRequest } from "next/server"
import { NextResponse } from "next/server"
import { DbUser, User, UserType } from "@/types"
import { ZodError } from "zod"
import connectMongoose from "@/lib/dbConnect"
import { UserModel } from "@/models/User"
import { signupValidator } from "@/validators/signupValidator"

