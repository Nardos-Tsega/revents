import React from "react";

export default function EventForm(){
    return(
        <div className="bg-white rounded py-4 flex flex-col px-4 gap-2">
            <h2 className="text-lg font-semibold my-1">Create New Event</h2>
            <input className="border rounded px-2 py-1 text-[12px]" type="text" placeholder="Category" />
            <input className="border rounded px-2 py-1 text-[12px]" type="text" placeholder="Event Title" />
            <input className="border rounded px-2 py-1 text-[12px]" type="text" placeholder="Description" />
            <input className="border rounded px-2 py-1 text-[12px]" type="text" placeholder="City" />
            <input className="border rounded px-2 py-1 text-[12px]" type="text" placeholder="Venue" />
            <input className="border rounded px-2 py-1 text-[12px]" type="date" placeholder="Date" />
            <div className="self-end mt-2">
                <button className="px-4 py-1 text-sm rounded bg-[#d9d9d9] mx-1">Cancel</button>
                <button className="px-4 py-1 text-sm rounded text-white bg-[#17A7AC] mx-1">Save</button>
            </div>
        </div>
    )
}