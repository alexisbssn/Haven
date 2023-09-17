import { Offer } from "@/dbTypes"
import * as React from "react"
import Image from "next/image"
import {
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"



type Props = {
  offer: Offer
}

/**
 * This is the field to enter the email adress
 */
export default function OfferDialog({ offer }: Props) {
  return (
    <AlertDialogContent>
      <AlertDialogHeader>
        <Image src={offer.pictureUrl} alt="offer image" width={230} height={230}></Image>
        <AlertDialogTitle>
          {offer.creator.firstName} {offer.creator.lastName.slice(0, 1)}.
        </AlertDialogTitle>
        <AlertDialogDescription>{offer.creator.city}</AlertDialogDescription>
        {/* request section */}
        <div>
          <div>{`${offer.creator.firstName}'s offer`}</div>
          <div>Posted on {offer.createdAt.toDateString()}</div>
          <div className="bold">{offer.type && offer.type.description}</div>
          <div>{offer.description}</div>
        </div>
        {/* story section */}
        <div>
          <div>{`Read ${offer.creator.firstName}'s story`}</div>
          <div>{offer.creator.myStory}</div>
        </div>
        {/* more details reusable component */}
        {/* share button, help button */}
      </AlertDialogHeader>
    </AlertDialogContent>
  )
}
