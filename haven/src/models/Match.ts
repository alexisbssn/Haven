import { Match } from "@/dbTypes"
import mongoose, { Schema } from "mongoose"

const matchSchema = new Schema<Match>({
  _id: String,
  request: { type: Schema.Types.ObjectId, ref: "Request" },
  offer: { type: Schema.Types.ObjectId, ref: "Offer" },
  status: String,
  refugee: { type: Schema.Types.ObjectId, ref: "User" },
  supporter: { type: Schema.Types.ObjectId, ref: "User" },
  createdAt: Date,
  updatedAt: Date,
})

export const MatchModel = mongoose.models.Match || mongoose.model<Match>("Match", matchSchema)
