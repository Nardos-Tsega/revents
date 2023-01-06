export default function SignedOutMenu({ setAuthenticated }) {
  return (
    <div className="flex gap-4">
      <button
        onClick={() => setAuthenticated(true)}
        className="border border-white text-white rounded px-3 py-1 flex items-center justify-center text-sm"
      >
        Login
      </button>
      <button className="border border-white text-white rounded px-3 py-1 flex items-center justify-center text-sm">
        Register
      </button>
    </div>
  );
}
