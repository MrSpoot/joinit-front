import { Button } from "@/components/ui/button";
import {
  Calendar,
  ChevronLeft,
  ChevronsRight,
  Heart,
  MapPin,
} from "lucide-react";

const Event: React.FC = () => {
  return (
    <div className="flex flex-col h-full w-full bg-green-400">
      <div className="w-full flex-1 p-4 flex justify-between">
        <Button variant={"outline"} size={"icon"} className="rounded-full">
          <ChevronLeft />
        </Button>
        <Button variant={"outline"} size={"icon"} className="rounded-full">
          <Heart />
        </Button>
      </div>
      <div className="flex flex-col w-full rounded-t-3xl bg-white items-center p-6">
        <div className="w-full">
          <p className="font-semibold text-lg">Neckdeep Tour 2022</p>
          <div className="flex gap-4 mt-2">
            <div className="flex gap-2 text-gray-300">
              <MapPin />
              <p>Yogyakarta</p>
            </div>
            <div className="flex gap-2 text-gray-300">
              <Calendar />
              <p>November 10 2022</p>
            </div>
          </div>
        </div>
        <div className="w-full mt-8">
          <p className="font-semibold">About Event</p>
          <p className="text-gray-300">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Odio sit eget
            euismod aenean justo nostra. Orci consectetur magnis parturient
            netus ipsum auctor. Hendrerit inceptos congue sit donec id. Orci
            etiam tellus suscipit condimentum at inceptos
          </p>
        </div>
        <div className="flex w-full rounded-full bg-blue-400 mt-16 items-center p-2">
          <div className="flex h-12 w-12 bg-white rounded-full items-center justify-center">
            <ChevronsRight />
          </div>
          <div className="flex justify-center items-center flex-1 h-12 font-semibold text-white text-lg">
            Buy Ticket - $63
          </div>
          <div className="flex h-12 w-12"></div>
        </div>
      </div>
    </div>
  );
};

export default Event;
