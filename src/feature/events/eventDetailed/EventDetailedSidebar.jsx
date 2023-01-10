import GoingToEvent from "./GoingToEvent";

export default function EventDetailedSidebar() {
  return (
    <div className="flex min-w-full flex-col">
      <div className="flex bg-[#17A7AC] items-center justify-center px-4 py-4 text-white">
        People Going
      </div>
      <div className="bg-white px-2 py-4">
        <GoingToEvent />
        <GoingToEvent />
        <GoingToEvent />
      </div>
    </div>
  );
}
