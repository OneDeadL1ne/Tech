import { ParametrsMenu } from "./Parametrs";
import { Button } from "./ui/button";
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
          </form>
        </div>
      </div>
    </div>
  );
}
