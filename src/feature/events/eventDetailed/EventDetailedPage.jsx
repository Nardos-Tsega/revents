import { useEffect } from "react";
import EventDetailedChat from "./EventDetailedChat";
import EventDetailedHeader from "./EventDetailedHeader";
import EventDetailedInfo from "./EventDetailedInfo";
import EventDetailedSidebar from "./EventDetailedSidebar";

export default function EventDetailedPage({ setHome }) {
  useEffect(() => {
    setHome(false);
  }, [setHome]);

  return (
    <div className="bg-[#eaeaea] min-h-screen">
      <div className="py-24 container max-w-4xl mx-auto">
        <div className="grid grid-cols-12">
          <div className="col-span-8">
            <EventDetailedHeader />
            <EventDetailedInfo />
            <EventDetailedChat />
          </div>
          <div className="col-span-4">
            <EventDetailedSidebar />
          </div>
        </div>
      </div>
    </div>
  );
}
