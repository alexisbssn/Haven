import { Message } from "postcss";
import mongoose, { Schema } from "mongoose";

const messageSchema = new Schema<Message>({
  _id: String,
  conversation: { type: Schema.Types.ObjectId, ref: "Conversation" },
  type: String,
  content: String,
  sentBy: { type: Schema.Types.ObjectId, ref: "User" },
  visibleBy: [{ type: Schema.Types.ObjectId, ref: "User" }],
  seenBy: [{ type: Schema.Types.ObjectId, ref: "User" }],
  createdAt: Date,
  updatedAt: Date,
});

export const MessageModel =
  mongoose.models.Message || mongoose.model<Message>("Message", messageSchema);
