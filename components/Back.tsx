"use client";
import { useEffect, type PropsWithChildren, useState } from "react";
import Image from "next/image";

import ParticlesBg from "particles-bg";
import { usePathname, useSearchParams } from "next/navigation";
import { useWindowSize } from "@/hook/useWindowSize";

export default function BackLayout({ children }: PropsWithChildren<unknown>) {
  const { width, height } = useWindowSize();
  return (
    <div className="">
      <div className=" min-h-screen min-w-full absolute">
        <ParticlesBg type="cobweb" num={width / 30} color="#FFFFFF" bg={true} />
      </div>

      <div className="relative">{children}</div>
    </div>
  );
}
