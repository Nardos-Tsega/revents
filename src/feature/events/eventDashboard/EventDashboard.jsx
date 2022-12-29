import React, {useState} from "react";
import EventForm from "../eventForm.jsx/EventForm";
import EventList from "./EventList";
import { sampleData } from "../../../app/api/sampleData";

export default function EventDashboard({showForm, setShowForm}) {

    const[events, setEvents] = useState(sampleData)

    function addEvent(event){
        setEvents([...events, event])
    }

    return (
        <div className="max-w-4xl container py-8 mx-auto">
        <div className="grid grid-cols-12 gap-4">
            <div className="col-span-8">
                <EventList events={events} />
            </div>
            <div className="col-span-4">
                {
                    showForm &&    <EventForm addEvent={addEvent} setShowForm={setShowForm} setEvents={setEvents}/>
                }
             
            </div>
        </div>
        </div>
    )
}