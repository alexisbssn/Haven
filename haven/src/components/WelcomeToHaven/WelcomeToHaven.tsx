import Image from "next/image"
import havenLogo from "@/assets/png/haven-logo.png"

/**
 * This is the component that displays "Welcome to Haven!" and it has the logo above it. It is displayed in both the login page and the signup page
 */
export default function WelcomeToHaven() {
  return (
    <div className="mb-7 flex flex-col items-center">
      <Image src={havenLogo} alt="logo" priority />
      <h3 className="pt-8 text-center text-lg font-bold">Welcome to Haven!</h3>
    </div>
  )
}
