import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export function RadioGroupDemo() {
  return (
    <RadioGroup className="">
      <div className="grid grid-cols-4">
      <div className="flex space-x-2">
        <RadioGroupItem value="0" id="r1" />
        <Label htmlFor="r1">1 км</Label>
      </div>
      <div className="flex space-x-2">
        <RadioGroupItem value="1" id="r2" />
        <Label htmlFor="r2">5 км</Label>
      </div>
      <div className="flex space-x-2">
        <RadioGroupItem value="2" id="r3" />
        <Label htmlFor="r3">20 км</Label>
      </div>
      <div className="flex space-x-2">
        <RadioGroupItem value="3" id="r4" />
        <Label htmlFor="r4">+100 км</Label>
      </div>
      </div>
    </RadioGroup>
  );
}
