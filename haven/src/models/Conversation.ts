import { Conversation } from "@/types";
import mongoose, { Schema } from "mongoose";

const conversationSchema = new Schema<Conversation>({
    _id: String,
    originalMatch: {type: Schema.Types.ObjectId, ref: "Match"},
    lastMessage: [{type: Schema.Types.ObjectId, ref: "Message"}],
    visibleBy: [{type: Schema.Types.ObjectId, ref: "User"}],
    createdAt: Date,
    updatedAt: Date,
});

export const ConversationModel = mongoose.models.Conversation || mongoose.model<Conversation>("Conversation", conversationSchema);