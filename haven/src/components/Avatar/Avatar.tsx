import Image from "next/image";
import { Button } from "../ui/button";
import usernameIconSvg from "@/assets/svg/usernameIconsvg.svg"

export default function Avatar() {
  return (
    <Button className="bg-transparent hover:bg-transparent ">
      <Image src={usernameIconSvg} width={50} alt=""/>
    </Button>
  )
}
