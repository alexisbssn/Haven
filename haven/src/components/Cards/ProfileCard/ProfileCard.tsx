import { User } from "@/dbTypes"
import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

type Props = {
  user: User
}

/**
 * This is the field to enter the email adress
 */
export default function ProfileCard({ user }: Props) {
  return (
    <div className="m-3">
      <Card className="w-[350px]">
        <CardHeader>
          {/* <Image src={user.pictureUrl} alt="offer image" width={230} height={230}></Image> */}

          <CardTitle>
            {user.firstName} {user.lastName.slice(0, 1)}.
          </CardTitle>
          <CardDescription>{user.city}</CardDescription>
        </CardHeader>
        <CardContent>{user.password}</CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Share button</Button>
          <Button>Help button</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
