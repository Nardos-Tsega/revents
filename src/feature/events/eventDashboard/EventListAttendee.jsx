import React from "react";

export default function EventListAttendee({attendee}){
    return(
        <div>
            <img src={attendee.photoURL} alt={attendee.name} className="h-8 w-8 rounded-full" />
        </div>
    )
}