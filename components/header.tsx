"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { useWindowSize } from "@/hook/useWindowSize";
import { usePathname } from "next/navigation";

export function Header() {
  const router = usePathname();
  return (
    <div
      className="relative min-w-full text-white grid grid-cols-2 p-5
    "
    >
      <Link href="/" className="text-white text-3xl">
        <Image src="/logo.png" alt="logo" width={120} height={56} />
      </Link>
    </div>
  );
}
