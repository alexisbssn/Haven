import { Offer } from "@/types";
import mongoose, { Schema } from "mongoose";

const offerSchema = new Schema<Offer>({
  _id: String,
  type: { type: Schema.Types.ObjectId, ref: "OfferType" },
  description: String,
  status: String,
  creator: { type: Schema.Types.ObjectId, ref: "User" },
  availabilityDate: Date,
  order: Number,
  pictureUrl: String,
  createdAt: Date,
  updatedAt: Date,
});

export const OfferModel =
  mongoose.models.Offer || mongoose.model<Offer>("Offer", offerSchema);
