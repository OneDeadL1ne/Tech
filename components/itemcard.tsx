import Image from "next/image";
import BasicRating from "./rating";

export function Item() {
  return (
    <div>
      <div className="grid  md:grid-cols-2 relative ml-[10%] mr-[10%] min-[420px]:ml-[15%] min-[420px]:mr-[15%] bg-[#ffffff0f] bg-gradient-to-r from-[#ffffff3d] rounded-xl  lg:grid-cols-2 text-white">
        <div className="grid md:grid-rows-4  p-5">
          <div className="">
            <div className="text-lg md:text-2xl">
              Дополнительное отделение центрального офиса.
            </div>
            <div>
              <BasicRating value={4.2} />
            </div>
          </div>

          <div>
          <div className="text-sm md:text-lg inline-block">Обслуживание</div>
          <div className="inline-flex m-1"><Image src="/dopinf.png" alt="" width={10} height={10}/></div>
            <div className="text-[#848484]">
              <div className="text-xs md:text-base">Физ лица</div>
              <div className="text-xs md:text-base">Юр лица</div>
            </div>
          </div>
          <div>
            <div className="text-sm md:text-lg inline-block">Режим</div>
            <div className="inline-flex m-1"><Image src="/dopinf.png" alt="" width={10} height={10}/></div>
            <div className="text-xs md:text-base text-[#848484]">10 00</div>
          </div>

          <div>
            <div className="text-sm md:text-lg">Адрес</div>
            <div className="text-xs md:text-base text-[#848484]">Шоссе</div>
            <div className="text-xs md:text-base text-[#848484]">Шоссе</div>
          </div>
        </div>
        <div className="flex justify-center p-5">
          <Image src="/test.png" alt="" width={300} height={100} />
          
        </div>
      </div>
    </div>
  );
}
