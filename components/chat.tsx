"use client";

import Image from "next/image";
import BasicRating from "./rating";
import { YMaps, Map } from "@pbe/react-yandex-maps";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  FormEvent,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import { useChatScroll } from "@/hook/useScroll";

type Data = {
  author: string;
  message: string;
};

export function Chat() {
  const [text, setText] = useState("");
  const [messages, setMessages] = useState(Array<Data>);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const res: Data = { author: "user", message: text };

    messages.push(res);

    setText("");
  }

  const messageEl = useRef(null);

  useEffect(() => {
    if (messageEl) {
      messageEl.current.addEventListener("DOMNodeInserted", (event: any) => {
        const { currentTarget: target } = event;
        target.scroll({ top: target.scrollHeight, behavior: "smooth" });
      });
    }
  }, []);

  return (
    <div>
      <div className="min-h-[500px] relative ml-[10%] mr-[10%] min-[420px]:ml-[15%] min-[420px]:mr-[15%] bg-[#ffffff0f] bg-gradient-to-r from-[#ffffff3d] rounded-xl  lg:grid-cols-2 text-black">
        <div className="p-3" ref={scrollTargetRef}>
          {messages.map((mes) => (
            <div>
              {mes.author === "user" ? (
                <div className="flex justify-end mt-2">
                  <div className="  bg-[#00AAFF] rounded-[10px] max-w-[300px] p-2 text-white">
                    {mes.message}
                  </div>
                </div>
              ) : (
                <div className="flex justify-start">
                  <div className="  bg-[#002882] rounded-[10px] max-w-[300px] p-2 text-white">
                    {mes.message}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="absolute bottom-0 w-[100%] p-3 grid grid-rows-2">
          <div className="grid grid-cols-4 mb-3 place-items-center">
            <Button className="bg-[#97979778] text-white font-bold rounded-[10px] max-w-[200px]">
              Применить
            </Button>
            <Button className="bg-[#97979778] text-white font-bold py-2 px-4 rounded-[10px] ">
              Применить
            </Button>
            <Button className="bg-[#97979778] text-white font-bold py-2 px-4 rounded-[10px] ">
              Применить
            </Button>
            <Button className="bg-[#97979778] text-white font-bold py-2 px-4 rounded-[10px] ">
              Применить
            </Button>
          </div>
          <form onSubmit={onSubmit}>
            <Input
              name="messaage"
              value={text}
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
