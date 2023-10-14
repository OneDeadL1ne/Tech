"use client";

import Image from "next/image";
import BasicRating from "./rating";
import { YMaps, Map } from "@pbe/react-yandex-maps";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Chat() {
  return (
    <div>
      <div className="min-h-[500px] relative ml-[10%] mr-[10%] min-[420px]:ml-[15%] min-[420px]:mr-[15%] bg-[#ffffff0f] bg-gradient-to-r from-[#ffffff3d] rounded-xl  lg:grid-cols-2 text-white">
       <div>

       </div>
       <div className="absolute bottom-0 w-[100%] p-3">
       <Button
        type="submit"
        className="bg-[#ffffff45] hover:bg-[#a1fda16b] text-white font-bold py-2 px-4 rounded-full"
      >
        Применить
      </Button>
        <Input className="rounded-[10px] bg-white"/>
       </div>
      </div>
    </div>
  );
}
