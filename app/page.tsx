"use client";

import React, { useState } from "react";
import { Wallet, Shield, FileText, HelpCircle, Clipboard } from "lucide-react";

export default function BeldexWalletHome() {
  const [darkMode, setDarkMode] = useState(true);
  const [currentView, setCurrentView] = useState("home"); // 'home', 'recovery-seed', 'address-keys'

  return (
    <div
      className={`flex min-h-screen ${
        darkMode ? "bg-gray-900" : "bg-gray-100"
      }`}
    >
      {/* Sidebar */}
      <aside
        className={`w-64 ${darkMode ? "bg-gray-800" : "bg-white"} border-r ${
          darkMode ? "border-gray-700" : "border-gray-200"
        } flex flex-col`}
      >
        {/* Logo */}
        <div className="p-6 border-b border-gray-700">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                <span className="text-green-500 font-bold text-sm">B</span>
              </div>
            </div>
            <div>
              <h1
                className={`font-semibold ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Beldex Wallet
              </h1>
              <p
                className={`text-xs ${
                  darkMode ? "text-gray-400" : "text-gray-500"
                }`}
              >
                v1.0.0 Beta
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-6">
          <button
            className={`w-full flex items-center gap-3 px-6 py-3 ${
              darkMode
                ? "text-gray-300 hover:bg-gray-700"
                : "text-gray-700 hover:bg-gray-100"
            } transition-colors`}
          >
            <Wallet size={20} />
            <span>Wallet</span>
          </button>
          <button
            className={`w-full flex items-center gap-3 px-6 py-3 ${
              darkMode
                ? "text-gray-300 hover:bg-gray-700"
                : "text-gray-700 hover:bg-gray-100"
            } transition-colors`}
          >
            <Shield size={20} />
            <span>Privacy</span>
          </button>
          <button
            className={`w-full flex items-center gap-3 px-6 py-3 ${
              darkMode
                ? "text-gray-300 hover:bg-gray-700"
                : "text-gray-700 hover:bg-gray-100"
            } transition-colors`}
          >
            <FileText size={20} />
            <span>Terms</span>
          </button>
          <button
            className={`w-full flex items-center gap-3 px-6 py-3 ${
              darkMode
                ? "text-gray-300 hover:bg-gray-700"
                : "text-gray-700 hover:bg-gray-100"
            } transition-colors`}
          >
            <HelpCircle size={20} />
            <span>Support</span>
          </button>
        </nav>

        {/* Dark Mode Toggle */}
        <div className="p-6 border-t border-gray-700">
          <div className="flex items-center justify-between">
            <span
              className={`text-sm ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Dark Mode
            </span>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`w-12 h-6 rounded-full transition-colors relative ${
                darkMode ? "bg-green-500" : "bg-gray-300"
              }`}
            >
              <div
                className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                  darkMode ? "translate-x-6" : "translate-x-0"
                }`}
              ></div>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Header */}
        <header
          className={`${darkMode ? "bg-gray-800" : "bg-white"} border-b ${
            darkMode ? "border-gray-700" : "border-gray-200"
          } px-8 py-4`}
        >
          <h2
            className={`text-xl font-semibold ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Home
          </h2>
        </header>

        {/* Content Area */}
        <div className="flex-1 flex items-center justify-center p-8">
          {currentView === "home" && (
            <div className="max-w-4xl w-full text-center">
              {/* Logo */}
              <div className="flex justify-center mb-8">
                <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/50">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                    <span className="text-green-500 font-bold text-2xl">B</span>
                  </div>
                </div>
              </div>

              {/* Title */}
              <h1
                className={`text-4xl font-bold mb-12 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Beldex Wallet
              </h1>

              {/* Illustration Area */}
              <div className="mb-12 relative">
                <svg viewBox="0 0 800 300" className="w-full h-auto">
                  {/* Dashed connecting lines */}
                  <path
                    d="M 200 150 Q 300 100, 400 150 Q 500 200, 600 150"
                    fill="none"
                    stroke={darkMode ? "#4B5563" : "#D1D5DB"}
                    strokeWidth="2"
                    strokeDasharray="5,5"
                  />

                  {/* Left person */}
                  <g transform="translate(120, 120)">
                    <circle cx="20" cy="15" r="15" fill="#6B7280" />
                    <rect
                      x="5"
                      y="35"
                      width="30"
                      height="50"
                      rx="5"
                      fill="#6B7280"
                    />
                    <rect
                      x="0"
                      y="45"
                      width="10"
                      height="30"
                      rx="3"
                      fill="#6B7280"
                    />
                  </g>

                  {/* Left phone with wallet */}
                  <g transform="translate(230, 80)">
                    <rect
                      x="0"
                      y="0"
                      width="100"
                      height="160"
                      rx="10"
                      fill="#4B5563"
                    />
                    <rect
                      x="10"
                      y="15"
                      width="80"
                      height="5"
                      rx="2"
                      fill="#6B7280"
                    />
                    <rect
                      x="20"
                      y="40"
                      width="60"
                      height="80"
                      rx="8"
                      fill="#374151"
                    />
                    <circle cx="50" cy="70" r="15" fill="#E5E7EB" />
                    <text
                      x="50"
                      y="110"
                      textAnchor="middle"
                      fill="#9CA3AF"
                      fontSize="10"
                    >
                      TRANSFER
                    </text>
                  </g>

                  {/* Shield icon */}
                  <g transform="translate(390, 140)">
                    <path
                      d="M 10 0 L 20 5 L 20 20 L 10 25 L 0 20 L 0 5 Z"
                      fill="#4B5563"
                    />
                  </g>

                  {/* Broken chain/link */}
                  <g transform="translate(430, 130)">
                    <ellipse
                      cx="15"
                      cy="15"
                      rx="12"
                      ry="8"
                      fill="none"
                      stroke="#6B7280"
                      strokeWidth="3"
                    />
                    <ellipse
                      cx="35"
                      cy="15"
                      rx="12"
                      ry="8"
                      fill="none"
                      stroke="#6B7280"
                      strokeWidth="3"
                    />
                    <line
                      x1="22"
                      y1="10"
                      x2="28"
                      y2="5"
                      stroke="#6B7280"
                      strokeWidth="3"
                    />
                    <line
                      x1="22"
                      y1="20"
                      x2="28"
                      y2="25"
                      stroke="#6B7280"
                      strokeWidth="3"
                    />
                  </g>

                  {/* Right phone with logo */}
                  <g transform="translate(470, 80)">
                    <rect
                      x="0"
                      y="0"
                      width="100"
                      height="160"
                      rx="10"
                      fill="#4B5563"
                    />
                    <rect
                      x="10"
                      y="15"
                      width="80"
                      height="5"
                      rx="2"
                      fill="#6B7280"
                    />
                    <circle cx="50" cy="80" r="20" fill="#10B981" />
                    <circle cx="50" cy="80" r="15" fill="white" />
                    <text
                      x="50"
                      y="85"
                      textAnchor="middle"
                      fill="#10B981"
                      fontSize="14"
                      fontWeight="bold"
                    >
                      B
                    </text>
                    <circle cx="50" cy="130" r="8" fill="#10B981" />
                    <path
                      d="M 47 130 L 49 132 L 54 127"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                    />
                  </g>

                  {/* Right person */}
                  <g transform="translate(640, 100)">
                    <circle cx="20" cy="15" r="15" fill="#D97706" />
                    <rect
                      x="5"
                      y="35"
                      width="30"
                      height="50"
                      rx="5"
                      fill="#6B7280"
                    />
                    <rect
                      x="30"
                      y="45"
                      width="10"
                      height="30"
                      rx="3"
                      fill="#6B7280"
                    />
                  </g>

                  {/* Lock icons */}
                  <g transform="translate(300, 180)">
                    <rect
                      x="0"
                      y="5"
                      width="8"
                      height="8"
                      rx="1"
                      fill="#4B5563"
                    />
                    <path
                      d="M 1 5 L 1 3 Q 1 0, 4 0 Q 7 0, 7 3 L 7 5"
                      fill="none"
                      stroke="#4B5563"
                      strokeWidth="1.5"
                    />
                  </g>

                  {/* Paper plane */}
                  <g transform="translate(440, 60)">
                    <path d="M 0 10 L 25 0 L 10 25 L 8 12 Z" fill="#9CA3AF" />
                  </g>

                  {/* Beldex logo circle (bottom right) */}
                  <g transform="translate(720, 240)">
                    <circle cx="25" cy="25" r="25" fill="#3B82F6" />
                    <circle cx="25" cy="25" r="18" fill="white" />
                    <text
                      x="25"
                      y="30"
                      textAnchor="middle"
                      fill="#3B82F6"
                      fontSize="16"
                      fontWeight="bold"
                    >
                      B
                    </text>
                  </g>
                </svg>
              </div>

              {/* Welcome Text */}
              <p
                className={`text-lg mb-8 ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Welcome to Beldex Wallet! Let's get started :)
              </p>

              {/* Action Buttons */}
              <div className="flex gap-4 justify-center">
                <button
                  onClick={() => setCurrentView("recovery-seed")}
                  className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
                >
                  Use Existing Wallet
                </button>
                <button className="px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg transition-colors">
                  Create New Wallet
                </button>
              </div>
            </div>
          )}

          {/* Recovery Seed View */}
          {currentView === "recovery-seed" && (
            <div className="max-w-2xl w-full">
              <h1
                className={`text-3xl font-bold text-center mb-12 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Existing Wallet
              </h1>

              <div
                className={`${
                  darkMode ? "bg-gray-800" : "bg-white"
                } rounded-lg p-8`}
              >
                <label
                  className={`block text-sm font-medium mb-3 ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  Recovery Seed
                </label>

                <div className="relative">
                  <textarea
                    placeholder="Enter Recovery Seed from Existing wallet"
                    rows={6}
                    className={`w-full px-4 py-3 rounded-lg ${
                      darkMode
                        ? "bg-gray-700 text-gray-200 placeholder-gray-500 border-gray-600"
                        : "bg-gray-100 text-gray-900 placeholder-gray-400 border-gray-300"
                    } border focus:outline-none focus:ring-2 focus:ring-green-500 resize-none`}
                  />
                  <button className="absolute top-3 right-3 text-green-500 hover:text-green-400">
                    <Clipboard size={20} />
                  </button>
                </div>

                <div className="mt-6 text-center">
                  <span
                    className={darkMode ? "text-gray-400" : "text-gray-600"}
                  >
                    or Use the{" "}
                  </span>
                  <button
                    onClick={() => setCurrentView("address-keys")}
                    className="text-blue-500 hover:text-blue-400 underline"
                  >
                    Address and Recovery Keys
                  </button>
                </div>

                <div className="flex gap-4 justify-center mt-8">
                  <button
                    onClick={() => setCurrentView("home")}
                    className={`px-8 py-3 rounded-lg font-medium transition-colors ${
                      darkMode
                        ? "bg-gray-700 hover:bg-gray-600 text-white"
                        : "bg-gray-200 hover:bg-gray-300 text-gray-900"
                    }`}
                  >
                    Cancel
                  </button>
                  <button className="px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg transition-colors">
                    Next
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Address and Keys View */}
          {currentView === "address-keys" && (
            <div className="max-w-2xl w-full">
              <h1
                className={`text-3xl font-bold text-center mb-12 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Existing Wallet
              </h1>

              <div
                className={`${
                  darkMode ? "bg-gray-800" : "bg-white"
                } rounded-lg p-8 space-y-6`}
              >
                <div>
                  <label
                    className={`block text-sm font-medium mb-3 ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    placeholder="Enter address"
                    className={`w-full px-4 py-3 rounded-lg ${
                      darkMode
                        ? "bg-gray-700 text-gray-200 placeholder-gray-500 border-gray-600"
                        : "bg-gray-100 text-gray-900 placeholder-gray-400 border-gray-300"
                    } border focus:outline-none focus:ring-2 focus:ring-green-500`}
                  />
                </div>

                <div>
                  <label
                    className={`block text-sm font-medium mb-3 ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    View Key
                  </label>
                  <input
                    type="text"
                    placeholder="Enter view Key"
                    className={`w-full px-4 py-3 rounded-lg ${
                      darkMode
                        ? "bg-gray-700 text-gray-200 placeholder-gray-500 border-gray-600"
                        : "bg-gray-100 text-gray-900 placeholder-gray-400 border-gray-300"
                    } border focus:outline-none focus:ring-2 focus:ring-green-500`}
                  />
                </div>

                <div>
                  <label
                    className={`block text-sm font-medium mb-3 ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Spend Key
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Spend Key"
                    className={`w-full px-4 py-3 rounded-lg ${
                      darkMode
                        ? "bg-gray-700 text-gray-200 placeholder-gray-500 border-gray-600"
                        : "bg-gray-100 text-gray-900 placeholder-gray-400 border-gray-300"
                    } border focus:outline-none focus:ring-2 focus:ring-green-500`}
                  />
                </div>

                <div className="text-center pt-2">
                  <span
                    className={darkMode ? "text-gray-400" : "text-gray-600"}
                  >
                    or Use the{" "}
                  </span>
                  <button
                    onClick={() => setCurrentView("recovery-seed")}
                    className="text-blue-500 hover:text-blue-400 underline"
                  >
                    or Use the Recovery Seed
                  </button>
                </div>

                <div className="flex gap-4 justify-center pt-4">
                  <button
                    onClick={() => setCurrentView("home")}
                    className={`px-8 py-3 rounded-lg font-medium transition-colors ${
                      darkMode
                        ? "bg-gray-700 hover:bg-gray-600 text-white"
                        : "bg-gray-200 hover:bg-gray-300 text-gray-900"
                    }`}
                  >
                    Cancel
                  </button>
                  <button className="px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg transition-colors">
                    Next
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
