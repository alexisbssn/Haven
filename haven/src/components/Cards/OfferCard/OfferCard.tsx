"use client"

import { Offer } from "@/dbTypes"
import * as React from "react"
import Image from "next/image"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

type Props = {
  offer: Offer
}

export default function OfferCard({ offer }: Props) {
  return (
    <div className="m-3">
      <Card className="w-[350px]">
        <CardHeader>
          <Image src={offer.pictureUrl} alt="offer image" width={230} height={230}></Image>

          <CardTitle>
            {offer.creator.firstName} {offer.creator.lastName.slice(0, 1)}.
          </CardTitle>
          <CardDescription>{offer.creator.city}</CardDescription>
        </CardHeader>
        <CardContent>card content</CardContent>
        <CardFooter className="flex justify-between"></CardFooter>
      </Card>
    </div>
  )
}
