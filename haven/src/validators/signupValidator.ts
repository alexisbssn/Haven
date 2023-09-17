import { z } from "zod"

export const signupValidator = z.object({
  _id: z.string().optional(),
  email: z
    .string()
    .min(1, { message: "This field is required." })
    .email("This is not a valid email."),
  firstName: z.string().min(1, { message: "This field is required." }),
  lastName: z.string().min(1, { message: "This field is required." }),
  type: z.enum(["refugee", "supporter", "admin"]), //todo use model types here
  password: z.string().min(8),
})
