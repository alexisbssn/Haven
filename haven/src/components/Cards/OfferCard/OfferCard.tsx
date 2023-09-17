"use client"

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
import { Offer } from "@/dbTypes"

type Props = {
  offer: Offer
}

export default function OfferCard({ offer }: Props) {
  return (
    <article className="relative flex w-96 flex-col items-center p-3">
      <Image
        alt="offer image"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        src={offer.pictureUrl}
        width={355}
        height={260}
      ></Image>
      <h2 className="text-2xl font-bold">
        {offer.creator.firstName} {offer.creator.lastName.slice(0, 1)}
      </h2>
      <p className="text-lg font-normal">{offer.creator.city}</p>
      <p className="text-lg font-normal">{"Welcome, I want you to meet Canadians in my new community"}</p>
    </article>
  )
}
