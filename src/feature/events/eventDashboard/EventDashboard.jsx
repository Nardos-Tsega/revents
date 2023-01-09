import React, { useEffect, useState } from "react";
import EventForm from "../eventForm.jsx/EventForm";
import EventList from "./EventList";
import { sampleData } from "../../../app/api/sampleData";
import { Route, Routes } from "react-router";
import EventDetailedPage from "../eventDetailed/EventDetailedPage";

export default function EventDashboard({
  showForm,
  setShowForm,
  handleSelectEvent,
  selectedEvent,
  setHome,
}) {
  const [events, setEvents] = useState(sampleData);

  function addEvent(event) {
    setEvents([...events, event]);
  }

  function handleUpdateEvent(updatedEvent) {
    setEvents(
      events.map((evt) => (evt.id === updatedEvent.id ? updatedEvent : evt))
    );
    selectedEvent(null);
  }

  function deleteEvent(eventId) {
    setEvents(events.filter((evt) => evt.id !== eventId));
  }

  useEffect(() => {
    setHome(false);
  }, [setHome]);

  return (
    <div className="py-24 bg-[#eaeaea] min-h-screen">
      <div className="max-w-4xl container mx-auto">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-8">
            <EventList
              deleteEvent={deleteEvent}
              handleSelectEvent={handleSelectEvent}
              events={events}
            />
          </div>
          <div className="col-span-4">
            {showForm && (
              <EventForm
                selectedEvent={selectedEvent}
                handleSelectEvent={handleSelectEvent}
                addEvent={addEvent}
                setShowForm={setShowForm}
                setEvents={setEvents}
                handleUpdateEvent={handleUpdateEvent}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
