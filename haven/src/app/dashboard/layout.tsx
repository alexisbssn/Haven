import havenLogo from "@/assets/haven-logo.png"
import { findHavenWebsiteUrl } from "@/lib/constants"
import Image from "next/image"
import Link from "next/link"

export default function Layout() {
	return (
		<main className="flex h-screen w-60 flex-col items-center bg-lady_of_the_night">
			<Link href={findHavenWebsiteUrl} className="mt-2">
				<Image
					src={havenLogo}
					alt="logo"
				/>
			</Link>
		</main>
	)
}
