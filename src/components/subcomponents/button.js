'use client';
export default function Button({ label }) {
  return (
    <button
      className="font-medium font-sans text-gray-100 hover:text-slate-600 bg-cyan-600 hover:bg-gray-100 border-2 border-cyan-600 py-2 px-3 rounded-lg transition ease-out duration-300 hover:scale-105 shadow-lg"
    >
      {label}
    </button>
  );
}
