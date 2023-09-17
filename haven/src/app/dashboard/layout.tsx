import Sidebar from "@/components/Sidebar/Sidebar"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex">
      <Sidebar />
      {children}
    </main>
  )
}
