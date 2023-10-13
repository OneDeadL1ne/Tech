import Image from "next/image";
import BasicRating from "./rating";

export function Item() {
  return (
    <div>
      <div className="grid grid-cols-2 relative ml-[10%] mr-[10%] min-[420px]:ml-[15%] min-[420px]:mr-[15%] bg-[#ffffff0f] bg-gradient-to-r from-[#ffffff3d] rounded-xl  lg:grid-cols-2 text-white">
        <div className="grid grid-rows-4 p-5">
          <div className="">
            <div className="text-4xl">
              Дополнительное отделение центрального офиса.
            </div>
            <div>
              <BasicRating value={4.2} />
            </div>
          </div>

          <div>
            <div className="text-xl">Обслуживание</div>
            <div className="grid grid-cols-2 text-gray-500">
              <div>Физ лица</div>
              <div>Юр лица</div>
            </div>
          </div>
          <div>
            <div className="">Режим</div>
            <div>10 00</div>
          </div>

          <div>
            <div className="">Адрес</div>
            <div>Шоссе</div>
            <div>Шоссе</div>
          </div>
        </div>
        <div className="flex justify-center p-5">
          <Image src="/test.png" alt="" width={400} height={400} />
        </div>
      </div>
    </div>
  );
}
