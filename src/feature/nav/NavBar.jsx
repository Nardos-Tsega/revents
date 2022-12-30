import React from "react";

export default function NavBar({ setShowForm }) {
  return (
    <div className="fixed w-full bg-gradient-to-r from-[#182A73] to-[#17A7AC] h-14 flex items-center">
      <div className="max-w-4xl container mx-auto flex items-center justify-between">
        <div className="flex gap-8">
          <div className="flex gap-2 items-center">
            <img src="./assets/logo.png" alt="product logo" className="h-8" />
            <h1 className="text-lg text-white font-bold">Sheger Events</h1>
          </div>
          <div className="flex items-center gap-4">
            <h2 className="text-sm font-light text-white">Events</h2>
            <button
              onClick={() => setShowForm(null)}
              className="text-white px-3 py-2 border-2 text-sm border-white rounded bg-[#17A7AC]"
            >
              Create Event
            </button>
          </div>
        </div>
        <div className="flex gap-4">
          <button className="border border-white text-white rounded px-3 py-1 flex items-center justify-center text-sm">
            Login
          </button>
          <button className="border border-white text-white rounded px-3 py-1 flex items-center justify-center text-sm">
            Register
          </button>
        </div>
      </div>
    </div>
  );
}
