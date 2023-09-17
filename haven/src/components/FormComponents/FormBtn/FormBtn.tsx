"use client"

import { Button } from "@/components/ui/button"

type Props = {
  text: string
}

export default function FormBtn({ text }: Props) {
  return <Button className="mt-4 bg-haven_blue">{text}</Button>
}
