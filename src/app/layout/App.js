import EventDashboard from "../../feature/events/eventDashboard/EventDashboard";
import NavBar from "../../feature/nav/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="bg-[#eaeaea] py-14 h-full">
        <EventDashboard />
      </div>
    </div>
  );
}

export default App;
