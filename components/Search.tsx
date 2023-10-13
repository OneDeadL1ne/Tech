import { ParametrsMenu } from "./Parametrs";
import { RadioGroupDemo } from "./RadioGroupDistance";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { Input } from "./ui/input";
import { Switch } from "./ui/switch";

export function Search() {
  return (
    <div>
      <div className="relative ml-[10%] mr-[10%] min-[420px]:ml-[15%] min-[420px]:mr-[15%] mt-32">
        <div className="bg-[#ffffff1b] bg-gradient-to-r from-[#ffffff25] p-5 rounded-[20px]">
          <form>
            <div>
              <Input className=" top-0 right-0 text-white border-[#fff0] bg-[#ffffff45] h-[40px]  rounded-[20px]" />
              <div className="absolute top-5 right-24">
                <ParametrsMenu />
              </div>

              <Button
                type="submit"
                className="absolute bg-[ffffff] hover:bg-[ffffff] top-5 right-8 text-white border-[#fff0]"
              >
                Найти
              </Button>
            </div>
            <div className="grid lg:grid-cols-2">
              <div className="text-white lg:pr-[5%]">
                <div className="mt-8">
                  Метро
                  <Input className=" top-0 text-white border-[#fff0] bg-[#ffffff45] h-[40px]  rounded-[20px] mt-4" />
                </div>
                <div className="mt-8">
                  Расстояние
                  <div className="mt-4">
                  <RadioGroupDemo />
                  </div>
                  <div className="mt-14">
                    Время Работы
                    <div className="flex justify-center mt-4">
                      <Input className=" top-0 text-white border-[#fff0] bg-[#ffffff45] h-[40px]  rounded-[20px] lg:max-w-[20%] mr-[10%]" />
                      <Input className=" top-0 text-white border-[#fff0] bg-[#ffffff45] h-[40px]  rounded-[20px] lg:max-w-[20%] ml-[10%]" />
                    </div>
                    <div className="flex justify-center mt-4">
                      <div className="flex items-center space-x-2  mr-[10%]">
                        <Checkbox id="terms" />
                        <label
                          htmlFor="terms"
                          className="text-xs lg:text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                         Круглосуточно
                        </label>
                      </div>
                      <div className="flex items-center space-x-2 ml-[10%]">
                        <Checkbox id="terms" />
                        <label
                          htmlFor="terms"
                          className="text-xs lg:text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          По выходным
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="mt-8">
                  Тип Клиента
                  </div>
                  <div className="grid grid-cols-3 mt-4">
                  <div className="flex items-center space-x-2  ">
                        <Checkbox id="terms" />
                        <label
                          htmlFor="terms"
                          className=" font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-xs lg:text-base"
                        >
                          По выходным
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="terms" />
                        <label
                          htmlFor="terms"
                          className="text-xs lg:text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          По выходным
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="terms" />
                        <label
                          htmlFor="terms"
                          className="text-xs lg:text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          По выходным
                        </label>
                      </div>
                  </div>
                </div>
              </div>
              <div className="text-white lg:pl-[5%]">
                <div className="mt-8">
                  Город
                  <Input className=" top-0 text-white border-[#fff0] bg-[#ffffff45] h-[40px]  rounded-[20px] mt-4" />
                </div>
                <div className="mt-8">
                  Тип Отделения
                  <Input className=" top-0 text-white border-[#fff0] bg-[#ffffff45] h-[40px]  rounded-[20px] mt-4" />
                </div>
                <div className="mt-8">
                  <div>Банкомат</div>
                  <div className="grid grid-cols-2">
                    <div>
                      Валюта
                      <div className="flex items-center space-x-2 mt-4">
                        <Checkbox id="terms" />
                        <label
                          htmlFor="terms"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          $
                        </label>
                      </div>
                      <div className="flex items-center space-x-2 mt-4">
                        <Checkbox id="terms" />
                        <label
                          htmlFor="terms"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          €
                        </label>
                      </div>
                      <div className="flex items-center space-x-2 mt-4">
                        <Checkbox id="terms" />
                        <label
                          htmlFor="terms"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          ₽
                        </label>
                      </div>
                    </div>
                    <div>
                      Снять/внести
                      <div>
                        <Switch color="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div className="grid grid-cols-2 place-items-center mt-8">
            <Button
                type="button"
                className="bg-[#ffffff45] hover:bg-[#fda1a16b] text-white font-bold py-2 px-4 rounded-full"
              >
                Сбросить
              </Button>
              <Button
                type="button"
                className="bg-[#ffffff45] hover:bg-[#a1fda16b] text-white font-bold py-2 px-4 rounded-full"
              >
              Применить
              </Button>
              </div>
          </form>
        </div>
      </div>
    </div>
  );
}
