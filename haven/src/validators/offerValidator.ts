import { z } from "zod"

export const offerValidator = z.object({
  _id: z.string().optional(),
  description: z.string(),
  type: z.string(),
  creator: z.string(),
  availabilityDate: z.date(),
  pictureUrl: z.string(),
})
