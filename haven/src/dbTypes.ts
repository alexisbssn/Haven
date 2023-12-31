import { Document, Types } from "mongoose"

export type LoginField = "email" | "password"
export type AvailableCities = ["Calgary", "Toronto", "Montreal"]
export type AvailableProvinces = ["Alberta", "Ontario", "Quebec"]
export type UserType = "refugee" | "supporter" | "admin"
export type RequestCategory =
  | "Services"
  | "Family"
  | "Community"
  | "Household"
  | "Housing"
  | "Employment"
export type OfferCategory =
  | "Services"
  | "Family"
  | "Community"
  | "Household"
  | "Housing"
  | "Employment"
export type MessageType = "text" | "image" | "file"
export type MatchStatus =
  | "Pending"
  | "Matched"
  | "Closed"
  | "Declined"
  | "PendingAdminApproval"
  | "AdminDeclined"
export type RequestStatus = "Open" | "Matched" | "Withdrawn" | "PendingVerification"
export type OfferStatus = "Open" | "Matched" | "Withdrawn" | "PendingVerification"
export type VerificationStatus = "Verified" | "Pending" | "AdvancedVerified" | "Malicious"
export type Language =
  | "English"
  | "French"
  | "Arabic"
  | "Spanish"
  | "Mandarin"
  | "Cantonese"
  | "Russian"
  | "Portuguese"
  | "German"
  | "Italian"
  | "Japanese"
  | "Korean"
  | "Hindi"
  | "Punjabi"
  | "Tagalog"
  | "Vietnamese"
  | "Polish"
  | "Persian"
  | "Urdu"
  | "Gujarati"
  | "Romanian"
  | "Dutch"
  | "Hungarian"
  | "Greek"
  | "Bengali"
  | "Hebrew"
  | "Thai"
  | "Turkish"
  | "Czech"
  | "Swedish"
  | "Danish"
  | "Finnish"
  | "Norwegian"
  | "Icelandic"
  | "Slovak"
  | "Croatian"
  | "Catalan"
  | "Ukrainian"
  | "Indonesian"
  | "Malay"
  | "Slovenian"
  | "Lithuanian"
  | "Latvian"
  | "Estonian"
  | "Serbian"
  | "Belarusian"
  | "Georgian"
  | "Armenian"
  | "Albanian"
  | "Azerbaijani"
  | "Basque"
  | "Macedonian"
  | "Bosnian"
  | "African"
  | "Other"

export type SignupField =
  | "firstName"
  | "lastName"
  | "password"
  | "email"
  | "accountType"
  | "confirmEmail"

interface Collection {
  _id?: string
  createdAt: Date
  updatedAt: Date
}

export interface User extends Collection {
  email: string
  firstName: string
  lastName: string
  type: UserType
  verificationStatus: VerificationStatus
  city: AvailableCities
  province: AvailableProvinces
  phoneNumber: string
  whatsapp: boolean
  myStory: string
  languages: Language[]
  password: string
}

export interface DbUser extends Document, User {
  _id: string
}

export interface RequestType extends Collection {
  needsAdvancedVerification: boolean
  category: RequestCategory
  iconUrl: string
  iconWithLabelUrl: string
  description: string
}

export interface DbRequestType extends RequestType, Document {
  _id: string
}

export interface OfferType extends Collection {
  needsAdvancedVerification: boolean
  category: OfferCategory
  iconUrl: string
  iconWithLabelUrl: string
  description: string
}

export interface DbOfferType extends OfferType, Document {
  _id: string
}

export interface Message extends Collection {
  conversation: Conversation
  type: MessageType
  content: string
  sentBy: User
  visibleBy: [User]
  seenBy: [User]
}

export interface DbMessage extends Message, Document {
  _id: string
}

export interface Conversation extends Collection {
  lastMessage: Message
  originalMatch: Match
  visibleBy: [User]
}

export interface DbConversation extends Conversation, Document {
  _id: string
}

export interface Match extends Collection {
  supporter: User
  refugee: User
  status: MatchStatus
  request: Request
  offer: Offer
}

export interface DbMatch extends Match, Document {
  _id: string
}

export interface Request extends Collection {
  description: string
  type: RequestType
  status: RequestStatus
  creator: User
  availabilityDate: Date
  order: number
  pictureUrl: string
}

export interface DbRequest extends Request, Document {
  _id: string
}

export interface Offer extends Collection {
  description: string
  type: OfferType
  status: OfferStatus
  creator: User
  availabilityDate: Date
  order: number
  pictureUrl: string
}

export interface DbOffer extends Offer, Document {
  _id: string
}
