import "./globals.css"
import { ReactNode } from "react"
import ReduxProvider from "@/providers/ReduxProvider"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Haven | Login",
  description: "Haven",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <ReduxProvider>
        <body className="relative flex">{children}</body>
      </ReduxProvider>
    </html>
  )
}
