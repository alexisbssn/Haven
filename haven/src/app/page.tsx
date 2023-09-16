import Image from "next/image"
import havenLogo from "@/assets/haven-logo.png"
import LoginForm from "@/components/LoginForm/LoginForm"
import Link from "next/link"

export default function Home() {
	return (
		<main className="flex h-screen justify-center">
			<section className="w-96">
				<div className="mb-7 flex flex-col items-center">
					<Image
						src={havenLogo}
						alt="logo"
						priority
					/>
					<h3 className="pt-8 text-center text-lg font-bold">Welcome to Haven!</h3>
				</div>
				<LoginForm />
				<div className="pt-4">
					<span>{"don't have an account?"}</span>
					<Link href={"/signUp"} className="underline font-bold ml-1">Sign up</Link>
				</div>
			</section>
		</main>
	)
}
