import Image from "next/image"
import havenLogo from "@/assets/haven-logo.png"
import LoginForm from "@/components/LoginForm/LoginForm"

export default function Home() {
	return (
		<main className="flex h-screen justify-center bg-green-400">
			<section>
				<div>
					<Image
						src={havenLogo}
						alt=""
						priority
					/>
					<h3 className="text-lg font-bold pt-8 text-center">Welcome to Haven!</h3>
				</div>
				<LoginForm />
			</section>
		</main>
	)
}
