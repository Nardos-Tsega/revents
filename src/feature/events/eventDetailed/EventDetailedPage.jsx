import EventDetailedChat from "./EventDetailedChat";
import EventDetailedHeader from "./EventDetailedHeader";
import EventDetailedInfo from "./EventDetailedInfo";
import EventDetailedSidebar from "./EventDetailedSidebar";

export default function EventDetailedPage() {
  return (
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
  );
}
