export default function EventDetailedHeader() {
  return (
    <div className="bg-black h-64 rounded-md relative text-white">
      <div className="absolute left-10 bottom-10">
        <h1 className="text-4xl">Event Title</h1>
        <p className="text-sm text-[#eaeaea]">Event Date</p>
        <p className="text-md mt-2">Hosted by Bob</p>
      </div>
    </div>
  );
}
