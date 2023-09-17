"use client";

import { Button } from "@/components/ui/button";

type Props = {
  text: string;
};

export default function FormBtn({ text }: Props) {
  return <Button className="bg-haven_blue mt-4">{text}</Button>;
}
