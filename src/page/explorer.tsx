import { Input } from "@/components/ui/input";

const Explorer: React.FC = () => {
  return (
    <div className="size-full flex flex-col">
      <div className="flex w-full justify-evenly">
        <div className="font-bold text-lg">Joint IT</div>
      </div>

      <Input />

      <div className="flex flex-row justify-between">
        <p>Nearby Event</p>
        <div>See More</div>
      </div>
    </div>
  );
};

export default Explorer;
