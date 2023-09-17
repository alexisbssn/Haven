import { z } from "zod"

export const offerTypeValidator = z.object({
  _id: z.string().optional(),
  needsAdvancedVerification: z.boolean(),
  category: z.enum(["Services", "Family", "Community", "Household", "Housing", "Employment"]),
  iconUrl: z.string(),
  iconWithLabelUrl: z.string(),
  description: z.string(),
})
