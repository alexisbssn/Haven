import { Offer } from "@/types";
import * as React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type Props = {
  offer: Offer;
};

/**
 * This is the field to enter the email adress
 */
export default function OfferCard({ offer }: Props) {
  return (
    <div>
      <Card className="w-[350px]">
        <CardHeader>
          <Image
            src={offer.pictureUrl}
            alt="offer image"
            width={230}
            height={230}
          ></Image>

          <CardTitle>
            {offer.creator.firstName} {offer.creator.lastName.slice(0, 1)}.
          </CardTitle>
          <CardDescription>{offer.creator.city}</CardDescription>
        </CardHeader>
        <CardContent>card content</CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Share button</Button>
          <Button>Help button</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
