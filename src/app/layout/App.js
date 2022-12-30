import { useState } from "react";
import EventDashboard from "../../feature/events/eventDashboard/EventDashboard";
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
      <NavBar setShowForm={handleSelectEvent} />
      <div className="py-20 bg-[#eaeaea]">
        <EventDashboard
          key={selectedEvent ? selectedEvent.id : null}
          selectedEvent={selectedEvent}
          showForm={showForm}
          setShowForm={setShowForm}
          handleSelectEvent={handleSelectEvent}
        />
      </div>
    </div>
  );
}

export default App;
