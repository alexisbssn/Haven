import { User } from "@/types";
import mongoose, { Schema } from "mongoose";

const userSchema = new Schema<User>(
  {
    email: String,
    firstName: String,
    lastName: String,
    type: String,
  },
  { discriminatorKey: "type" }
);

export const UserModel =
  mongoose.models.User || mongoose.model<User>("User", userSchema);

const refugeeSchema = new Schema<User>({
  email: String,
  firstName: String,
  lastName: String,
});

export const RefugeeModel = UserModel.discriminator("refugee", refugeeSchema);

const supporterSchema = new Schema<User>({
  email: String,
  firstName: String,
  lastName: String,
});

export const SupporterModel = UserModel.discriminator(
  "supporter",
  supporterSchema
);

const adminSchema = new Schema<User>({
  email: String,
  firstName: String,
  lastName: String,
});

export const AdminModel = UserModel.discriminator("admin", adminSchema);
