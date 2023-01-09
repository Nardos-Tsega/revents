import React from "react";
import { useNavigate } from "react-router";

export default function Home({ setHome }) {
  let navigate = useNavigate();

  function handleGetStarted() {
    navigate("/");
    setHome(false);
  }

  return (
    <div className="min-h-screen  bg-gradient-to-r from-[#182A73] to-[#17A7AC] flex flex-col gap-2 items-center justify-center">
      <div className="border-2 rounded-full px-6 py-6">
        <img src="./assets/logo.png" alt="sheger logo" className="h-16" />
      </div>
      <h3 className="text-4xl text-white">Sheger Events</h3>

      <button
        onClick={handleGetStarted}
        className="mt-4 px-16 text-white py-4 border-2 border-white rounded hover:bg-white hover:text-[#182A73]"
      >
        Get Started
      </button>
    </div>
  );
}
