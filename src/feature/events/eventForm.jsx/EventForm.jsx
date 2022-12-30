import cuid from "cuid";
import React, { useState } from "react";

export default function EventForm({
  setShowForm,
  addEvent,
  selectedEvent,
  handleUpdateEvent,
}) {
  const initialValue = selectedEvent ?? {
    title: "",
    date: "",
    category: "",
    description: "",
    city: "",
    venue: "",
  };

  const [values, setValues] = useState(initialValue);

  function handleInputChange(e) {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }

  function handleSubmit() {
    selectedEvent
      ? handleUpdateEvent({ ...selectedEvent, ...values })
      : addEvent({ ...values, id: cuid, hostedBy: "Mussie", attendees: [] });
  }

  return (
    <div className="bg-white rounded py-4 flex flex-col px-4 gap-2">
      <h2 className="text-lg font-semibold my-1">
        {selectedEvent ? "Edit Event" : "Create New Event"}
      </h2>
      <input
        className="border rounded px-2 py-1 text-[12px]"
        onChange={(e) => handleInputChange(e)}
        value={values.title}
        name="title"
        type="text"
        placeholder="Event Title"
      />
      <input
        className="border rounded px-2 py-1 text-[12px]"
        onChange={(e) => handleInputChange(e)}
        value={values.category}
        name="category"
        type="text"
        placeholder="Category"
      />
      <input
        className="border rounded px-2 py-1 text-[12px]"
        onChange={(e) => handleInputChange(e)}
        value={values.description}
        name="description"
        type="text"
        placeholder="Description"
      />
      <input
        className="border rounded px-2 py-1 text-[12px]"
        onChange={(e) => handleInputChange(e)}
        value={values.city}
        name="city"
        type="text"
        placeholder="City"
      />
      <input
        className="border rounded px-2 py-1 text-[12px]"
        onChange={(e) => handleInputChange(e)}
        value={values.venue}
        name="venue"
        type="text"
        placeholder="Venue"
      />
      <input
        className="border rounded px-2 py-1 text-[12px]"
        onChange={(e) => handleInputChange(e)}
        value={values.date}
        name="date"
        type="date"
        placeholder="Date"
      />
      <div className="self-end mt-2">
        <button
          onClick={() => setShowForm(false)}
          className="px-4 py-1 text-sm rounded bg-[#d9d9d9] mx-1"
        >
          Cancel
        </button>
        <button
          onClick={() => handleSubmit()}
          className="px-4 py-1 text-sm rounded text-white bg-[#17A7AC] mx-1"
        >
          Save
        </button>
      </div>
    </div>
  );
}
