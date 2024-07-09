"use client";
export default function Button() {
  return (
    <div>
      <button
        onClick={() => console.log("Hello world")}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded "
      >
        Click Me
      </button>
    </div>
  );
}
