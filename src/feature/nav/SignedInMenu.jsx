import { Popover } from "@headlessui/react";

export default function SignedInMenu({ signOut }) {
  return (
    <div className="flex items-center gap-4">
      <div className="border-2 border-white rounded-full px-1 py-1">
        <img
          src="./assets/user.png"
          alt="user profile"
          className="h-8 rounded-full"
        />
      </div>
      <Popover className="relative">
        <Popover.Button className="focus:outline-none px-6 py-2 border-none rounded-full text-black bg-white">
          Eminem
        </Popover.Button>
        <Popover.Panel className="shadow-md absolute z-10 bg-white rounded-md -ml-16 mt-1 flex flex-col gap-2 items-start px-6 py-4 w-[180px]">
          <button>Create Event</button>
          <button>My Profile</button>
          <button onClick={signOut}>Sign Out</button>
        </Popover.Panel>
      </Popover>
    </div>
  );
}
