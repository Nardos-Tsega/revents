<<<<<<< HEAD
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
=======
import React from "react";

export default function EventDetailedPage() {
  return <h1>Event Detail Page</h1>;
>>>>>>> 13ce4c6baee292e649f95203dbc1e567203617aa
}
