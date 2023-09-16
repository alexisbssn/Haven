import { ReactNode } from "react"
import "./globals.css"
import type { Metadata } from "next"
import ReduxProvider from "@/providers/ReduxProvider"

export const metadata: Metadata = {
	title: "Haven | Login",
	description: "Haven",
}

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<ReduxProvider>
				<body>{children}</body>
			</ReduxProvider>
		</html>
	)
}
