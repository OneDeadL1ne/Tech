import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
export function WorkTime() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="border-transparent focus:border-transparent focus:ring-0 "
        >
          <Image src="/dopinf.png" alt="" width={10} height={10} />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] border-transparent focus:border-transparent focus:ring-0 bg-gradient-to-b from-[#002882] fron-0% to-[#0AF] to-149.8% text-white ">
        <DialogHeader>
          <DialogTitle>Время работы</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <div>Будни</div>
            <div>09:00 - 20:00</div>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <div>Суббота</div>
            <div>10:00 - 17:00</div>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <div>Воскресенье</div>
            <div>Выходной</div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
