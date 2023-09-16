import Image from "next/image"
import havenLogo from "@/assets/haven-logo.png"

export default function Home() {
	return (
		<main className="flex h-screen justify-center bg-green-400">
			<div>
				<div>
					<Image
						src={havenLogo}
						alt=""
					/>
				</div>
				<div></div>
			</div>
		</main>
	)
}
