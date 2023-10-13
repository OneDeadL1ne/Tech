import Image from "next/image"

export function Item(){
    return <div>
        
        <div className="grid grid-cols-2 relative ml-[10%] mr-[10%] min-[420px]:ml-[20%] min-[420px]:mr-[20%] bg-[#ffffff0f] bg-gradient-to-r from-[#ffffff3d] rounded-xl  lg:grid-cols-2 text-white">
            <div className="grid grid-rows-4 ">
             <div className=""> 
                <div className="text-4xl">
                Заголовок
                </div>
                <div>
                Оценка звезды
             </div>
             </div>

             <div>
             <div className="text-xl">
                    Обслуживание
                </div>
                <div className="grid grid-cols-2 text-gray-500">
                    <div>
                    Физ лица
                    </div>
                    <div>
                    Юр лица
                    </div>
                </div>
             </div>
             <div>
             <div className="">
                    Режим
                </div>
                <div>
                    10 00
                </div>
             </div>
             
             <div>
             <div className="">
                    Адрес
                </div>
                <div>
                    Шоссе
                </div>
                <div>
                    Шоссе
                </div>
             </div>


            </div>
            <div>
            <Image src="/test.png" alt="" width={10000} height={1000000}/>
            </div>
        </div>

    </div>
}