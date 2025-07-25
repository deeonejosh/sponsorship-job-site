import React from "react";

export function Button({ children }) {
  return (
    <button className="bg-blue-600 text-white py-2 px-4 rounded-xl hover:bg-blue-700 transition">
      {children}
    </button>
  );
}
