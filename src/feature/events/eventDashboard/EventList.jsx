import React from "react";
import EventListItem from "./EventListItem";

export default function EventList({ events, handleSelectEvent, deleteEvent }) {
  return (
    <div className="flex-col">
      {events.map((event) => {
        return (
          <EventListItem
            deleteEvent={deleteEvent}
            handleSelectEvent={handleSelectEvent}
            key={event.id}
            event={event}
          />
        );
      })}
    </div>
  );
}
