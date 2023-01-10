import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import EventDashboard from "../../feature/events/eventDashboard/EventDashboard";
import EventDetailedPage from "../../feature/events/eventDetailed/EventDetailedPage";
import EventForm from "../../feature/events/eventForm.jsx/EventForm";
import Home from "../../feature/home/Home";
import NavBar from "../../feature/nav/NavBar";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [home, setHome] = useState(true);

  function handleSelectEvent(event) {
    setSelectedEvent(event);
    setShowForm(true);
  }

  return (
    <div>
      <NavBar setHome={setHome} home={home} setShowForm={handleSelectEvent} />
      <Routes>
        <Route path="/home" element={<Home setHome={setHome} />} />
        <Route exact path="/" element={<EventDashboard setHome={setHome} />} />
        <Route
          path="/events"
          element={
            <EventDashboard
              key={selectedEvent ? selectedEvent.id : null}
              selectedEvent={selectedEvent}
              showForm={showForm}
              setShowForm={setShowForm}
              handleSelectEvent={handleSelectEvent}
              setHome={setHome}
            />
          }
        />
        <Route
          path="/events/:id"
          element={<EventDetailedPage setHome={setHome} />}
        />

        <Route
          path={["/createEvent", "/manage/:id"]}
          element={<EventForm setHome={setHome} />}
        />
      </Routes>
    </div>
  );
}

export default App;
