import "./globals.css"
import { ReactNode } from "react"
import ReduxProvider from "@/providers/ReduxProvider"
import type { Metadata } from "next"
import { Toaster } from "@/components/ui/toaster"
import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false

export const metadata: Metadata = {
  title: "Haven | Login",
  description: "Haven",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <ReduxProvider>
        <body className="relative flex">
          {children}
          <Toaster />
        </body>
      </ReduxProvider>
    </html>
  )
}
