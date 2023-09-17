import { Request } from "@/dbTypes"
import mongoose, { Schema } from "mongoose"

const requestSchema = new Schema<Request>({
  _id: String,
  type: { type: Schema.Types.ObjectId, ref: "RequestType" },
  description: String,
  status: String,
  creator: { type: Schema.Types.ObjectId, ref: "User" },
  availabilityDate: Date,
  order: Number,
  pictureUrl: String,
  createdAt: Date,
  updatedAt: Date,
})

export const RequestModel =
  mongoose.models.Request || mongoose.model<Request>("Request", requestSchema)
