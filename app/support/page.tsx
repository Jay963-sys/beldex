// app/support/page.tsx
import React from "react";

export default function SupportPage() {
  const supportChannels = [
    {
      name: "Discord",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
          <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
        </svg>
      ),
      url: "https://discord.gg/beldex",
      color: "hover:bg-[#5865F2]/10",
    },
    {
      name: "Telegram",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12a12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472c-.18 1.898-.962 6.502-1.36 8.627c-.168.9-.499 1.201-.82 1.23c-.696.065-1.225-.46-1.9-.902c-1.056-.693-1.653-1.124-2.678-1.8c-1.185-.78-.417-1.21.258-1.91c.177-.184 3.247-2.977 3.307-3.23c.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345c-.48.33-.913.49-1.302.48c-.428-.008-1.252-.241-1.865-.44c-.752-.245-1.349-.374-1.297-.789c.027-.216.325-.437.893-.663c3.498-1.524 5.83-2.529 6.998-3.014c3.332-1.386 4.025-1.627 4.476-1.635z" />
        </svg>
      ),
      url: "https://t.me/beldex",
      color: "hover:bg-[#0088cc]/10",
    },
    {
      name: "Github",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
          <path d="M12 0c-6.626 0-12 5.373-12 12c0 5.302 3.438 9.8 8.207 11.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416c-.546-1.387-1.333-1.756-1.333-1.756c-1.089-.745.083-.729.083-.729c1.205.084 1.839 1.237 1.839 1.237c1.07 1.834 2.807 1.304 3.492.997c.107-.775.418-1.305.762-1.604c-2.665-.305-5.467-1.334-5.467-5.931c0-1.311.469-2.381 1.236-3.221c-.124-.303-.535-1.524.117-3.176c0 0 1.008-.322 3.301 1.23c.957-.266 1.983-.399 3.003-.404c1.02.005 2.047.138 3.006.404c2.291-1.552 3.297-1.23 3.297-1.23c.653 1.653.242 2.874.118 3.176c.77.84 1.235 1.911 1.235 3.221c0 4.609-2.807 5.624-5.479 5.921c.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576c4.765-1.589 8.199-6.086 8.199-11.386c0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      url: "https://github.com/beldex-coin",
      color: "hover:bg-white/10",
    },
  ];

  return (
    <div className="min-h-screen bg-[#1a1d2e] text-white">
      {/* Header */}
      <header className="border-b border-gray-700 px-6 py-4">
        <h1 className="text-2xl font-semibold">Support</h1>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center px-6 py-16 min-h-[calc(100vh-73px)]">
        {/* Illustration Container */}
        <div className="relative mb-16">
          {/* Decorative elements */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <div className="absolute top-0 left-12 w-2 h-2 bg-green-500 rounded-full opacity-60"></div>
          <div className="absolute top-12 right-8 w-1.5 h-1.5 bg-green-500 rounded-full opacity-40"></div>
          <div className="absolute bottom-16 left-0 w-8 h-8 border border-green-500 rounded-full opacity-30"></div>
          <div className="absolute top-1/2 right-0 w-6 h-6 border border-green-500 rounded-full opacity-40"></div>
          <div className="absolute -bottom-4 left-1/3 w-2 h-2 bg-green-500 rounded-full opacity-50"></div>

          {/* Plus signs */}
          <div className="absolute -top-4 right-16 text-green-500 text-xl opacity-50">
            +
          </div>
          <div className="absolute top-20 left-4 text-green-500 text-sm opacity-40">
            +
          </div>
          <div className="absolute bottom-8 right-12 text-green-500 text-lg opacity-60">
            +
          </div>
          <div className="absolute top-1/3 -left-8 text-green-500 text-base opacity-50">
            +
          </div>

          {/* Main Illustration */}
          <div className="relative">
            <svg
              width="400"
              height="300"
              viewBox="0 0 400 300"
              fill="none"
              className="drop-shadow-2xl"
            >
              {/* Monitor */}
              <rect
                x="60"
                y="80"
                width="280"
                height="180"
                rx="8"
                fill="#2d3142"
                stroke="#3d4152"
                strokeWidth="2"
              />
              <rect
                x="70"
                y="90"
                width="260"
                height="150"
                rx="4"
                fill="#1a1d2e"
              />

              {/* Monitor stand */}
              <path d="M180 260 L220 260 L210 280 L190 280 Z" fill="#3d4152" />
              <rect
                x="160"
                y="280"
                width="80"
                height="8"
                rx="4"
                fill="#3d4152"
              />

              {/* Video call window on screen */}
              <rect
                x="100"
                y="110"
                width="200"
                height="130"
                rx="6"
                fill="#2d3142"
              />

              {/* Person on screen */}
              <ellipse cx="200" cy="160" rx="30" ry="35" fill="#4a5568" />
              <circle cx="200" cy="145" r="20" fill="#fbbf77" />
              <path d="M180 155 Q200 165 220 155" fill="#2d3142" />
              <rect
                x="185"
                y="175"
                width="30"
                height="50"
                rx="8"
                fill="#48bb78"
              />
              <rect
                x="175"
                y="180"
                width="15"
                height="45"
                rx="6"
                fill="#48bb78"
              />
              <rect
                x="210"
                y="180"
                width="15"
                height="45"
                rx="6"
                fill="#48bb78"
              />

              {/* Chat bubbles on screen */}
              <rect
                x="110"
                y="115"
                width="50"
                height="20"
                rx="10"
                fill="#f7fafc"
                opacity="0.9"
              />
              <circle cx="120" cy="125" r="2" fill="#2d3748" />
              <circle cx="128" cy="125" r="2" fill="#2d3748" />
              <circle cx="136" cy="125" r="2" fill="#2d3748" />

              {/* Person standing */}
              <ellipse
                cx="300"
                cy="240"
                rx="15"
                ry="5"
                fill="#000000"
                opacity="0.2"
              />
              <circle cx="300" cy="195" r="18" fill="#fbbf77" />
              <rect
                x="285"
                y="212"
                width="30"
                height="45"
                rx="8"
                fill="#48bb78"
              />
              <rect
                x="275"
                y="217"
                width="15"
                height="40"
                rx="6"
                fill="#2d3142"
              />
              <rect
                x="310"
                y="217"
                width="15"
                height="40"
                rx="6"
                fill="#48bb78"
              />
              <rect
                x="288"
                y="257"
                width="10"
                height="20"
                rx="4"
                fill="#2d3142"
              />
              <rect
                x="302"
                y="257"
                width="10"
                height="20"
                rx="4"
                fill="#2d3142"
              />

              {/* Chat bubble next to person */}
              <rect
                x="320"
                y="190"
                width="45"
                height="25"
                rx="12"
                fill="#2d3142"
                stroke="#48bb78"
                strokeWidth="2"
              />
              <circle cx="330" cy="202" r="2" fill="#f7fafc" />
              <circle cx="338" cy="202" r="2" fill="#f7fafc" />
              <circle cx="346" cy="202" r="2" fill="#f7fafc" />
            </svg>
          </div>
        </div>

        {/* Support Channels */}
        <div className="flex gap-6 flex-wrap justify-center">
          {supportChannels.map((channel) => (
            <a
              key={channel.name}
              href={channel.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                group relative w-40 h-40 bg-[#2d3142] rounded-2xl 
                flex flex-col items-center justify-center gap-4 
                transition-all duration-300 hover:scale-105 hover:shadow-2xl
                ${channel.color}
              `}
            >
              <div className="text-white transition-transform duration-300 group-hover:scale-110">
                {channel.icon}
              </div>
              <span className="text-white font-medium text-lg">
                {channel.name}
              </span>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-green-500/0 to-green-500/0 group-hover:from-green-500/5 group-hover:to-green-500/10 transition-all duration-300"></div>
            </a>
          ))}
        </div>

        {/* Optional help text */}
        <p className="mt-12 text-gray-400 text-center max-w-md">
          Need help? Reach out to our community on any of these platforms and
          we'll be happy to assist you.
        </p>
      </main>
    </div>
  );
}
