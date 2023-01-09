import SingleChat from "./SingleChat";

export default function EventDetailedChat() {
  return (
    <div className="bg-white rounded border-2 mt-4">
      <div className="py-4 text-white text-center bg-[#17A7AC]">
        {" "}
        Chat about this event
      </div>
      <div className="mt-2">
        <SingleChat />
        <SingleChat />
        <SingleChat />
        <SingleChat />
      </div>

      <textarea className="border mt-6 py-2 w-[90%] ml-8" rows="5" cols="40" />

      <button className="bg-[#17A7AC] px-6 ml-8 mt-2 mb-6 py-2 rounded text-white">
        Add Reply
      </button>
    </div>
  );
}
