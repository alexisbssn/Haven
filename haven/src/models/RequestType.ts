import { RequestType } from "@/dbTypes"
import mongoose, { Schema } from "mongoose"

const requestTypeSchema = new Schema<RequestType>({
  needsAdvancedVerification: Boolean,
  category: String,
  iconUrl: String,
  iconWithLabelUrl: String,
  description: String,
  createdAt: Date,
  updatedAt: Date,
})

export const RequestTypeModel =
  mongoose.models.RequestType || mongoose.model<RequestType>("RequestType", requestTypeSchema)
