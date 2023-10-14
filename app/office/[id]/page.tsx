import { Item } from "@/components/itemcard";

interface OfficeProps {
  params: {
    id: number;
  };
}

export default function Officepage({ params: { id } }: OfficeProps) {
  let office = id;
  console.log(office);
  return (
    <div>
      <Item />
    </div>
  );
}
