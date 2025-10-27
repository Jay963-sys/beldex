"use client";

import { Bell, Settings } from "lucide-react";

export default function Header({
  title,
  darkMode,
}: {
  title: string;
  darkMode: boolean;
}) {
  return (
    <header
      className={`w-full px-8 py-4 flex items-center justify-between border-b ${
        darkMode
          ? "bg-gray-900 border-gray-700 text-white"
          : "bg-white border-gray-300 text-gray-900"
      }`}
    >
      <h2 className="text-xl font-semibold">{title}</h2>

      <div className="flex items-center gap-4">
        {/* Notification Button */}
        <button
          className={`p-2 rounded-md transition ${
            darkMode ? "hover:bg-gray-700" : "hover:bg-gray-200"
          }`}
        >
          <Bell size={20} />
        </button>

        {/* Settings Button */}
        <button
          className={`p-2 rounded-md transition ${
            darkMode ? "hover:bg-gray-700" : "hover:bg-gray-200"
          }`}
        >
          <Settings size={20} />
        </button>
      </div>
    </header>
  );
}
