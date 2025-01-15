import { Calendar, ChevronRight, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CardEvent: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div
      className="flex flex-shrink-0 flex-col w-44 h-52 border border-1 rounded-lg p-1"
      onClick={() => {
        navigate("/event");
      }}
    >
      <div className="w-full aspect-video bg-green-400 rounded-md shadow-lg shadow-gray-400 bg-cover bg-[url('https://www.electro-world.fr/img/public/mainstage-tomorrowland-2019659792.jpg')]" />
      <p className=" text-sm font-semibold mt-4">Neckdeep Tour 2022</p>
      <div className="flex mt-2 gap-2 justify-between">
        <div className="flex gap-1 text-gray-300">
          <Calendar size={16} />
          <p className="text-xs">Nov 10 2022</p>
        </div>
        <div className="flex gap-1 text-gray-300">
          <Clock size={16} />
          <p className="text-xs">08.00 PM</p>
        </div>
      </div>
      <div className="flex flex-row flex-1 py-1 justify-end items-end text-blue-400 text-sm">
        <div className="flex items-center">Buy Ticket</div>
        <ChevronRight size={20} />
      </div>
    </div>
  );
};

export default CardEvent;
