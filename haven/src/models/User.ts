import { User } from "@/types";
import mongoose, { Schema } from "mongoose";

// email: string;
//   firstName: string;
//   lastName: string;
//   type: UserType;
//   verificationStatus: VerificationStatus;
//   city: AvailableCities;
//   province: AvailableProvinces;
//   phoneNumber: string;
//   whatsapp: boolean;
//   myStory: string;
//   languages: Language[];

const userSchema = new Schema<User>(
  {
    email: String,
    firstName: String,
    lastName: String,
    verificationStatus: String,
    city: String,
    province: String,
    phoneNumber: String,
    whatsapp: Boolean,
    myStory: String,
    languages: [String],
    type: String,
  },
  { discriminatorKey: "type" }
);

if (!mongoose.models.User) {
  mongoose.models.User = mongoose.model<User>("User", userSchema);
}
export const UserModel = mongoose.models.User;

const refugeeSchema = new Schema<User>({
  email: String,
  firstName: String,
  lastName: String,
  verificationStatus: String,
  city: String,
  province: String,
  phoneNumber: String,
  whatsapp: Boolean,
  myStory: String,
  languages: [String],
});

if (!mongoose.models.Refugee) {
  mongoose.models.Refugee = UserModel.discriminator("refugee", refugeeSchema);
}

export const RefugeeModel = mongoose.models.Refugee;

const supporterSchema = new Schema<User>({
  email: String,
  firstName: String,
  lastName: String,
  verificationStatus: String,
  city: String,
  province: String,
  phoneNumber: String,
  whatsapp: Boolean,
  myStory: String,
  languages: [String],
});

if (!mongoose.models.supporter) {
  mongoose.models.supporter = UserModel.discriminator(
    "supporter",
    supporterSchema
  );
}
export const SupporterModel = mongoose.models.supporter;

const adminSchema = new Schema<User>({
  email: String,
  firstName: String,
  lastName: String,
  verificationStatus: String,
  city: String,
  province: String,
  phoneNumber: String,
  whatsapp: Boolean,
  myStory: String,
  languages: [String],
});

if (!mongoose.models.Admin) {
  mongoose.models.Admin = UserModel.discriminator("admin", adminSchema);
}
export const AdminModel = mongoose.models.Admin;
