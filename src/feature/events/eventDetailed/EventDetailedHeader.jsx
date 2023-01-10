export default function EventDetailedHeader() {
  return (
    <div className="flex flex-col bg-white">
      <div className="bg-black h-64 rounded-md relative text-white">
        <div className="absolute left-10 bottom-10">
          <h1 className="text-4xl">Event Title</h1>
          <p className="text-sm text-[#eaeaea]">Event Date</p>
          <p className="text-md mt-2">Hosted by Bob</p>
        </div>
      </div>
      <div className="flex justify-between px-10 py-4">
        <div className="flex gap-2">
          <button className="px-4 py-2 rounded bg-[#cbcccc] text-black text-sm">
            Cancel My Place
          </button>
          <button className="px-4 py-2 rounded bg-[#17A7AC] text-white text-sm">
            JOIN THIS EVENT
          </button>
        </div>
        <button className="px-4 py-2 rounded bg-[#f7995f] text-white text-sm">
          Manage Event
        </button>
      </div>
    </div>
  );
}
