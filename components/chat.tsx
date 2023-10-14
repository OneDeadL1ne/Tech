"use client";

import Image from "next/image";
import BasicRating from "./rating";
import { YMaps, Map } from "@pbe/react-yandex-maps";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormEvent, useState } from "react";

export function Chat() {
  const [text, setText] = useState("");
  const [messages, setMessages] = useState(Array<string>);

  async function toMessage(form: FormData) {
    "use server";
    const message = form.get("message")?.toString();
    console.log(message);
  }

  return (
    <div>
      <div className="min-h-[500px] relative ml-[10%] mr-[10%] min-[420px]:ml-[15%] min-[420px]:mr-[15%] bg-[#ffffff0f] bg-gradient-to-r from-[#ffffff3d] rounded-xl  lg:grid-cols-2 text-black">
        <div className="p-3">
          <div className="flex justify-end">
            {messages.map((mes) => (
              <div className="  bg-[#00AAFF] rounded-[10px] max-w-[300px] p-2 text-white">
                {mes}
              </div>
            ))}
          </div>
          <div className="flex justify-start">
            <div className="  bg-[#002882] rounded-[10px] max-w-[300px] p-2 text-white">
              wefewwevewvewv
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 w-[100%] p-3 grid grid-rows-2">
          <div className="grid grid-cols-4 mb-3 place-items-center">
            <Button
              type="submit"
              className="bg-[#97979778] text-white font-bold rounded-[10px] max-w-[200px]"
            >
              Применить
            </Button>
            <Button
              type="submit"
              className="bg-[#97979778] text-white font-bold py-2 px-4 rounded-[10px] "
            >
              Применить
            </Button>
            <Button
              type="submit"
              className="bg-[#97979778] text-white font-bold py-2 px-4 rounded-[10px] "
            >
              Применить
            </Button>
            <Button className="bg-[#97979778] text-white font-bold py-2 px-4 rounded-[10px] ">
              Применить
            </Button>
          </div>
          <form action={toMessage}>
            <Input
              name="messaage"
              className="rounded-[10px] bg-white"
              onChange={(e) => {
                setText(e.target.value);
              }}
            />

            <Button className="bg-[#002782e4] hover:bg-[#002882] text-white font-bold py-2 px-4 rounded-[10px] absolute bottom-6 right-3">
              Применить
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
