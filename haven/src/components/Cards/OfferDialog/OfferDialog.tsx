import { Offer } from "@/dbTypes"
import * as React from "react"
import Image from "next/image"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"

type Props = {
  offer: Offer
}

/**
 * This is the field to enter the email adress
 */
export default function OfferDialog({ offer }: Props) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Show Dialog</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <Image src={offer.pictureUrl} alt="offer image" width={230} height={230}></Image>
          <AlertDialogTitle>
            {offer.creator.firstName} {offer.creator.lastName.slice(0, 1)}.
          </AlertDialogTitle>
          <AlertDialogDescription>{offer.creator.city}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
