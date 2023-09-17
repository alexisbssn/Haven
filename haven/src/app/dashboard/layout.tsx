import havenLogo from "@/assets/haven-logo.png";
import { findHavenWebsiteUrl } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <main className="w-70 flex h-screen flex-col items-center bg-haven_blue">
        <Link href={findHavenWebsiteUrl} className="mt-2">
          <Image src={havenLogo} alt="logo" />
        </Link>
        tests
      </main>

      {children}
    </div>
  );
}
