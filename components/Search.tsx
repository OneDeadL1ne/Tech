import { ParametrsMenu } from "./Parametrs";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { Input } from "./ui/input";

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
                variant="default"
                className="absolute bg-[ffffff] hover:bg-[ffffff] top-5 right-8 text-white border-[#fff0]"
              >
                Найти
              </Button>
            </div>
            <div className="text-white">
              <div className="mt-8">
                Метро
                <Input className=" top-0 max-w-[50%] text-white border-[#fff0] bg-[#ffffff45] h-[40px]  rounded-[20px]" />
              </div>
              <div className="mt-8">
                Расстояние
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    1 Км
                  </label>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
