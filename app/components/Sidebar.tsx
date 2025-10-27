"use client";
import Link from "next/link";
import { Wallet, Shield, FileText, HelpCircle } from "lucide-react";

export default function Sidebar({ darkMode, setDarkMode }: any) {
  return (
    <aside
      className={`w-64 ${
        darkMode ? "bg-gray-800" : "bg-white"
      } border-r border-gray-700 flex flex-col`}
    >
      <div className="p-6 border-b border-gray-700">
        <h1
          className={`${
            darkMode ? "text-white" : "text-gray-900"
          } font-semibold`}
        >
          Beldex Wallet
        </h1>
      </div>

      <nav className="flex-1 py-6">
        <Link href="/wallet" className="sidebar-link">
          <Wallet size={20} /> Wallet
        </Link>
        <Link href="/privacy" className="sidebar-link">
          <Shield size={20} /> Privacy
        </Link>
        <Link href="/terms" className="sidebar-link">
          <FileText size={20} /> Terms
        </Link>
        <Link href="/support" className="sidebar-link">
          <HelpCircle size={20} /> Support
        </Link>
      </nav>

      {/* Dark Mode Toggle */}
      <div className="p-6 border-t border-gray-700">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-300">Dark Mode</span>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`w-12 h-6 rounded-full ${
              darkMode ? "bg-green-500" : "bg-gray-300"
            }`}
          >
            <div
              className={`w-4 h-4 bg-white rounded-full mt-1 ml-1 transition-transform
                ${darkMode ? "translate-x-6" : "translate-x-0"}`}
            />
          </button>
        </div>
      </div>
    </aside>
  );
}
