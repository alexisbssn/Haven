import { OfferType } from "@/dbTypes"
import mongoose, { Schema } from "mongoose"

const offerTypeSchema = new Schema<OfferType>({
  category: String,
  iconUrl: String,
  iconWithLabelUrl: String,
  description: String,
  createdAt: Date,
  updatedAt: Date,
})

export const OfferTypeModel =
  mongoose.models.OfferType || mongoose.model<OfferType>("OfferType", offerTypeSchema)
