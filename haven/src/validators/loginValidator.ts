import { z } from "zod";

export const loginValidator = z.object({
  email: z
    .string()
    .min(1, { message: "This field is required." })
    .email("This is not a valid email."),
  password: z.string().min(8),
})
