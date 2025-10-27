"use client";

import React, { useState } from "react";
import { Wallet, Shield, FileText, HelpCircle, Clipboard } from "lucide-react";
import { generateMnemonic } from "bip39";
import Link from "next/link";
import Image from "next/image";

export default function BeldexWalletHome() {
  const [darkMode, setDarkMode] = useState(true);
  const [currentView, setCurrentView] = useState("home");
  const [mnemonic, setMnemonic] = useState<string[]>([]);
  const [verifyIndices, setVerifyIndices] = useState<number[]>([]);
  const [verifyInputs, setVerifyInputs] = useState<string[]>(["", "", ""]);

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
            <div className="w-10 h-10 flex items-center justify-center">
              <Image
                src="/brand/beldex.svg"
                alt="Beldex Logo"
                width={40}
                height={40}
                className="rounded-lg"
                priority
              />
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
          <Link
            href="/"
            className={`w-full flex items-center gap-3 px-6 py-3 ${
              darkMode
                ? "text-gray-300 hover:bg-gray-700"
                : "text-gray-700 hover:bg-gray-100"
            } transition-colors`}
          >
            <Wallet size={20} />
            <span>Wallet</span>
          </Link>

          <Link
            href="/privacy"
            className={`w-full flex items-center gap-3 px-6 py-3 ${
              darkMode
                ? "text-gray-300 hover:bg-gray-700"
                : "text-gray-700 hover:bg-gray-100"
            } transition-colors`}
          >
            <Shield size={20} />
            <span>Privacy</span>
          </Link>

          <Link
            href="/terms"
            className={`w-full flex items-center gap-3 px-6 py-3 ${
              darkMode
                ? "text-gray-300 hover:bg-gray-700"
                : "text-gray-700 hover:bg-gray-100"
            } transition-colors`}
          >
            <FileText size={20} />
            <span>Terms</span>
          </Link>

          <Link
            href="/support"
            className={`w-full flex items-center gap-3 px-6 py-3 ${
              darkMode
                ? "text-gray-300 hover:bg-gray-700"
                : "text-gray-700 hover:bg-gray-100"
            } transition-colors`}
          >
            <HelpCircle size={20} />
            <span>Support</span>
          </Link>
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
                <div className="flex justify-center mb-8">
                  <div className="w-28 h-28 flex items-center justify-center">
                    <Image
                      src="/brand/beldex.svg"
                      alt="Beldex Logo"
                      width={112}
                      height={112}
                      priority
                      className="drop-shadow-lg"
                    />
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
              <div className="mb-12 flex justify-center">
                <Image
                  src="/brand/beldex.png"
                  alt="Beldex Wallet Illustration"
                  width={600}
                  height={300}
                  className="object-contain rounded-lg shadow-md"
                  priority
                />
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
                <button
                  onClick={() => setCurrentView("new-wallet-warning")}
                  className="px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg transition-colors"
                >
                  Create New Wallet
                </button>
              </div>
            </div>
          )}

          {currentView === "new-wallet-warning" && (
            <div className="max-w-xl w-full text-center">
              <h1
                className={`text-3xl font-bold mb-6 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Important Security Notice
              </h1>

              <p
                className={`${
                  darkMode ? "text-gray-300" : "text-gray-700"
                } mb-4`}
              >
                Your recovery phrase is the only way to restore your wallet.
              </p>
              <ul
                className={`text-left mb-8 space-y-3 ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                <li>• Write it down and store in a secure place.</li>
                <li>• Never share with anyone — including apps or support.</li>
                <li>• Anyone with your phrase can steal your funds.</li>
              </ul>

              <div className="flex gap-4 justify-center">
                <button
                  onClick={() => setCurrentView("home")}
                  className={`px-8 py-3 rounded-lg font-medium ${
                    darkMode
                      ? "bg-gray-700 text-white"
                      : "bg-gray-200 text-gray-900"
                  }`}
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    const phrase = generateMnemonic().split(" ");
                    setMnemonic(phrase);
                    setCurrentView("new-wallet-seed");
                  }}
                  className="px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg"
                >
                  I Understand
                </button>
              </div>
            </div>
          )}

          {currentView === "new-wallet-seed" && (
            <div className="max-w-xl w-full text-center">
              <h1
                className={`text-3xl font-bold mb-6 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Your Recovery Phrase
              </h1>

              <div
                className={`grid grid-cols-3 gap-3 p-6 rounded-lg mb-8 ${
                  darkMode
                    ? "bg-gray-800 text-gray-200"
                    : "bg-gray-100 text-gray-900"
                }`}
              >
                {mnemonic.map((word, i) => (
                  <div key={i} className="text-sm font-medium">
                    {i + 1}. {word}
                  </div>
                ))}
              </div>

              <p
                className={`${
                  darkMode ? "text-gray-400" : "text-gray-600"
                } mb-8`}
              >
                Please write down these words in order. You will need them to
                restore your wallet.
              </p>

              <div className="flex gap-4 justify-center">
                <button
                  onClick={() => setCurrentView("new-wallet-warning")}
                  className={`px-8 py-3 rounded-lg font-medium ${
                    darkMode
                      ? "bg-gray-700 text-white"
                      : "bg-gray-200 text-gray-900"
                  }`}
                >
                  Back
                </button>
                <button
                  onClick={() => {
                    const randomIndices = Array.from(
                      new Set(
                        [...Array(3)].map(() =>
                          Math.floor(Math.random() * mnemonic.length)
                        )
                      )
                    );

                    setVerifyIndices(randomIndices);
                    setCurrentView("new-wallet-verify");
                  }}
                  className="px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg"
                >
                  Verify
                </button>
              </div>
            </div>
          )}

          {currentView === "new-wallet-verify" && (
            <div className="max-w-xl w-full text-center">
              <h1
                className={`text-3xl font-bold mb-6 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Verify Your Recovery Phrase
              </h1>

              <p
                className={`${
                  darkMode ? "text-gray-400" : "text-gray-600"
                } mb-6`}
              >
                Enter the following words to confirm you backed them up
                correctly:
              </p>

              <div className="space-y-6">
                {verifyIndices.map((index, i) => (
                  <div key={index}>
                    <label
                      className={`${
                        darkMode ? "text-gray-200" : "text-gray-900"
                      } text-sm font-medium`}
                    >
                      Word #{index + 1}
                    </label>
                    <input
                      type="text"
                      className={`w-full mt-2 px-4 py-3 rounded-lg ${
                        darkMode
                          ? "bg-gray-700 text-gray-200 placeholder-gray-500"
                          : "bg-gray-100 text-gray-900 placeholder-gray-400"
                      } border focus:outline-none focus:ring-2 focus:ring-green-500`}
                      placeholder={`Enter word #${index + 1}`}
                      value={verifyInputs[i]}
                      onChange={(e) => {
                        const newInputs = [...verifyInputs];
                        newInputs[i] = e.target.value.toLowerCase().trim();
                        setVerifyInputs(newInputs);
                      }}
                    />
                  </div>
                ))}
              </div>

              <div className="flex gap-4 justify-center mt-10">
                <button
                  onClick={() => setCurrentView("new-wallet-seed")}
                  className={`px-8 py-3 rounded-lg font-medium ${
                    darkMode
                      ? "bg-gray-700 text-white"
                      : "bg-gray-200 text-gray-900"
                  }`}
                >
                  Back
                </button>

                <button
                  onClick={() => {
                    const valid = verifyIndices.every(
                      (idx, i) => mnemonic[idx] === verifyInputs[i]
                    );
                    if (!valid)
                      return alert("Incorrect words. Please try again.");

                    // ✅ Verification Passed
                    window.location.href = "/dashboard";
                  }}
                  className="px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg"
                >
                  Confirm
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
