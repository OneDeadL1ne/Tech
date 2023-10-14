"use client";

import Image from "next/image";
import BasicRating from "./rating";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import { useWindowSize } from "@/hook/useWindowSize";
import { WorkTime } from "./WorkTime";
import { InputPro } from "./InputPro";
import { Input } from "@/components/ui/input"

export function Item() {
  const { height, width } = useWindowSize();
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

            <div className="text-[#848484]">
              <div className="text-xs md:text-base">Физ лица</div>
              <div className="text-xs md:text-base">Юр лица</div>
            </div>
          </div>
          <div>
            <div className="text-sm md:text-lg inline-block">Режим</div>
            <div className="inline-flex ">
              <WorkTime />
            </div>
            <div className="text-xs md:text-base text-[#848484]">10 00</div>
          </div>

          <div>
            <div className="text-sm md:text-lg">Адрес</div>
            <div className="text-xs md:text-base text-[#848484]">Шоссе</div>
            <div className="text-xs md:text-base text-[#848484]">Шоссе</div>
          </div>
        </div>
        {width > 1050 && (
          <div className="flex justify-center  p-5">
            <YMaps>
              <Map
                className="h-full w-full rounded-md"
                defaultState={{ center: [55.758798, 37.75221], zoom: 15 }}
              >
                <Placemark
                  geometry={[55.758798, 37.75221]}
                  options={{
                    iconImageHref: "",
                  }}
                />
              </Map>
            </YMaps>
          </div>
        )}
      </div>
      <div className="relative ml-[10%] mr-[10%] min-[420px]:ml-[15%] min-[420px]:mr-[15%]  lg:grid-cols-2 text-white">
        <div className="grid grid-cols-2  ">
        <InputPro/>
        <div className="">
          Вернуться в чат
        </div>
        <div className="grid grid-cols-2">
        <div className="flex flex-1">
  <p className="pr-6">Text</p>
  <div
    className="inline-block h-[250px] min-h-[1em] w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50"></div>
  <p className="pl-6">Text</p>
</div>

        </div>
        <div className="bg-[#ffffff0f] min-h-full min-w-full p-3 rounded-xl">
<div className="flex justify-center p3">
  График загруженности 
</div>
<div>
лучшее время для посещения 10:30 
</div>
<div>
  Время
</div>
<div className="flex justify-normal ">
<Input     className="rounded-[10px] bg-white text-black pr-5"/>
<Input     className="rounded-[10px] bg-white text-black pl-5"/>
</div>
</div>
        </div>
        <div>
        Другие оптимальные отделения
        </div>
        <div>
        <div className="flex justify-center  p-5">
            <YMaps>
              <Map
                className="h-full w-full rounded-md"
                defaultState={{ center: [55.758798, 37.75221], zoom: 15 }}
              >
                <Placemark
                  geometry={[55.758798, 37.75221]}
                  options={{
                    iconImageHref: "",
                  }}
                />
              </Map>
            </YMaps>
          </div>
        </div>
      </div>
    </div>
  );
}