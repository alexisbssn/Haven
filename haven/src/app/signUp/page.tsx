import Link from "next/link"
import WelcomeToHaven from "@/components/WelcomeToHaven/WelcomeToHaven"
import SignupForm from "@/components/SignupForm/SignupForm"
import hashpass from "@/lib/bcrypt/hashPass"
export default function Page() {

	async function test() {
		const hashedPassword = await hashpass("rami1995")
		

		console.log(hashedPassword)
	}
	return (
		<main className="flex h-screen w-full justify-center">
			<section className="w-96">
				<WelcomeToHaven />
				<SignupForm/>
				<div className="pt-4">
					<span>{"Already have an account?"}</span>
					<Link
						href={"/"}
						className="ml-1 font-bold underline"
					>
						Sign in
					</Link>
				</div>
			</section>
		</main>
	)
}
