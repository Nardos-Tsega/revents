import React, { useState } from "react";
import SignedInMenu from "./SignedInMenu";
import SignedOutMenu from "./SignedOutMenu";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";

export default function NavBar({ setShowForm, home, setHome }) {
  const [authenticated, setAuthenticated] = useState(false);
  const navigate = useNavigate();

  const handleSignOut = () => {
    setAuthenticated(false);
    setHome(true);
    navigate("/home");
  };

  if (home) {
    return null;
  }

  return (
    <div className="fixed w-full bg-gradient-to-r from-[#182A73] to-[#17A7AC] h-14 flex items-center">
      <div className="max-w-4xl container mx-auto flex items-center justify-between">
        <div className="flex gap-8">
          <NavLink to="/" className="flex gap-2 items-center">
            <img src="./assets/logo.png" alt="product logo" className="h-8" />
            <h1 className="text-lg text-white font-bold">Sheger Events</h1>
          </NavLink>
          <div className="flex items-center gap-4">
            <h2 className="text-sm font-light text-white">Events</h2>
            {authenticated && (
              <button
                onClick={() => setShowForm(null)}
                className="text-white px-3 py-2 border-2 text-sm border-white rounded bg-[#17A7AC]"
              >
                Create Event
              </button>
            )}
          </div>
        </div>

        {authenticated ? (
          <SignedInMenu signOut={handleSignOut} />
        ) : (
          <SignedOutMenu setAuthenticated={setAuthenticated} />
        )}
      </div>
    </div>
  );
}
