import React from "react";
import {MdLocationPin, MdWatchLater} from "react-icons/md";
import EventListAttendee from "./EventListAttendee";

export default function EventListItem({event}){
    return(
        <div className="bg-white rounded-md shadow-sm py-6 mb-4">
            {/* header section */}
            <div className="flex px-12 gap-4">
                <img src={event.hostPhotoURL} alt="avatar" className="w-12 rounded-full" />
                <div >
                    <h4 className="text-sm">{event.title}</h4>
                    <p className="text-[12px]">Hosted by {event.hostedBy}</p>
                </div>
            </div>
            <hr className="my-4" />
            {/* location and venue */}
            <div className="flex gap-4 px-12">
                <span className="flex gap-1 items-center">
                    <MdWatchLater />
                    <span className="text-sm">{event.date}</span>
                </span>
                <span className="flex gap-1 items-center">
                    <MdLocationPin />
                    <span className="text-[12px] text-[#17A7AC]">{event.venue}</span>
                </span>
            </div>
            
            {/* attendees */}
            <div className="bg-[#EFF2F3] border flex gap-4 flex-wrap py-4 px-12 my-4">
                {event.attendees.map((attendee) => {
                    return <EventListAttendee key={attendee.id} attendee={attendee} />
                })}
            </div>
            
            {/* description */}
            <div className="mt-2 px-12 flex flex-col gap-4">
                <p className="text-sm">
Note that the development build is not optimized.   
To create a production build, use npm run build.  </p>

            <button className="bg-[#17A7AC] px-4 py-2 text-[12px] self-end text-white rounded">View</button>

            </div>
        </div>
    )
}