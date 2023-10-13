"use client";

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
      <Link href="https://moretech.vtb.ru/" className="text-white text-3xl">
        More.Tech
      </Link>
      <div className="grid grid-cols-1 place-items-end">
        <div className="place-items-end">
          {router !== "/" && (
            <Button variant="ghost">
              <Link href="/">Главная</Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
