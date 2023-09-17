import Link from "next/link"
import LoginForm from "@/components/LoginForm/LoginForm"
import WelcomeToHaven from "@/components/WelcomeToHaven/WelcomeToHaven"

export default function Home() {
  return (
    <main className="flex h-screen w-full justify-center">
      <section className="w-96">
        <WelcomeToHaven />
        <LoginForm />
        <div className="pt-4">
          <span>{"don't have an account?"}</span>
          <Link href={"/signUp"} className="ml-1 font-bold underline">
            Sign up
          </Link>
        </div>
      </section>
    </main>
  )
}
