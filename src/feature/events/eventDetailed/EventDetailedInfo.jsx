import { AiFillInfoCircle, AiFillCalendar } from "react-icons/ai";
import { ImLocation } from "react-icons/im";

export default function EventDetailedInfo() {
  return (
    <div className="bg-white border mt-4 rounded-md text-[#17A7AC]">
      <div className="flex items-center gap-4 px-4 py-4">
        <AiFillInfoCircle />
        <span> Event Description</span>
      </div>
      <hr />
      <div className="flex items-center gap-4 px-4 py-4">
        <AiFillCalendar />
        <span> Event Date</span>
      </div>
      <hr />
      <div className="flex justify-between items-center px-4 py-4">
        <div className="flex items-center gap-4">
          <ImLocation />
          <span> Event Venue</span>
        </div>
        <button className="bg-[#17A7AC] text-white rounded py-2 px-4">
          Show Map
        </button>
      </div>
    </div>
  );
}
