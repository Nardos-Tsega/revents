import { useState } from "react";
import { Route, Routes } from "react-router";
import EventDashboard from "../../feature/events/eventDashboard/EventDashboard";
import Home from "../../feature/home/Home";
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
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route
          path="/"
          element={
            <>
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
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
