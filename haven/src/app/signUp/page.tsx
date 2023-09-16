import Link from "next/link"
import WelcomeToHaven from "@/components/WelcomeToHaven/WelcomeToHaven"
export default function Page() {
	return (
		<main className="flex h-screen w-full justify-center">
			<section className="w-96">
				<WelcomeToHaven />
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
