"use client";

import * as React from "react";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { ParametrsForm } from "./FormParametrs";

export function ParametrsMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost">
          <Image src="/parametrs.png" height={25} width={25} alt="sea" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="absolute  bg-white rounded-[10px] ">
        <DropdownMenuLabel>Параметры поиска</DropdownMenuLabel>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
