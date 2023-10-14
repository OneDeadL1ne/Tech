import Image from "next/image";
import ParticlesBg from "particles-bg";
import { Item } from "@/components/itemcard";
import { Chat } from "@/components/chat";

export default function Home() {
  return (
    <main>
      <Item />
      <Button
        type="submit"
        className="bg-[#ffffff45] hover:bg-[#a1fda16b] text-white font-bold py-2 px-4 rounded-full"
      >
        Применить
      </Button>
    </main>
  );
}
