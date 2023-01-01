import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import EventDashboard from "../../feature/events/eventDashboard/EventDashboard";
import EventDetailedPage from "../../feature/events/eventDetailed/EventDetailedPage";
import EventForm from "../../feature/events/eventForm.jsx/EventForm";
import HomePage from "../../feature/home/HomePage";
import NavBar from "../../feature/nav/NavBar";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  function handleSelectEvent(event) {
    setSelectedEvent(event);
    setShowForm(true);
  }

  return (
    <div>
      <Routes path="/">
        <Route path="/" element={<HomePage />} />
      </Routes>
      <NavBar setShowForm={handleSelectEvent} />
      <div className="py-20 bg-[#eaeaea]">
        <Routes path="{'/(.+)}">
          <Route
            path="events"
            element={
              <EventDashboard
                key={selectedEvent ? selectedEvent.id : null}
                selectedEvent={selectedEvent}
                showForm={showForm}
                setShowForm={setShowForm}
                handleSelectEvent={handleSelectEvent}
              />
            }
          />
          <Route path="/events/:id" element={<EventDetailedPage />} />
          <Route path="/createEvent" element={<EventForm />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
