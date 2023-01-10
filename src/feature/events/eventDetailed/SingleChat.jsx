import { MdOutlineReply } from "react-icons/md";

export default function SingleChat() {
  return (
    <div className="ml-4 mt-2 py-2 flex gap-2">
      <img
        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80"
        alt="user profile"
        className="h-12 rounded-full"
      />
      <div className="flex flex-col items-start">
        <div className="flex gap-3 items-center">
          <p className="font-medium">Matt</p>
          <p className="text-[12px] text-[#606060]]">today at 5:00 pm</p>
        </div>
        <p className="text-sm">This needs better organization</p>

        <div className="flex gap-2 items-center">
          <MdOutlineReply />
          <button className="\">Reply</button>
        </div>
      </div>
    </div>
  );
}
