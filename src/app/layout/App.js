import { useState } from "react";
import EventDashboard from "../../feature/events/eventDashboard/EventDashboard";
import NavBar from "../../feature/nav/NavBar";

function App() {
  
  const[showForm, setShowForm] = useState(false);

  return (
    <div className="App">
      <NavBar setShowForm={setShowForm}  />
      <div className="bg-[#eaeaea] py-14 h-full">
        <EventDashboard showForm={showForm} setShowForm={setShowForm} />
      </div>
    </div>
  );
}

export default App;
