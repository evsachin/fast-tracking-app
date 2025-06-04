import React from "react";
import Timer from "../components/Timer";

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-blue-800/50 via-transparent to-emerald-800/30"></div>

      {/* Floating orbs for depth */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>

      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-4">
        {/* Header section */}
        <div className="text-center mb-12 max-w-4xl">
          <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent leading-tight">
            Fasting Tracker
          </h1>

          <p className="text-xl md:text-2xl text-purple-200/80 font-light mb-2">
            Your journey to wellness starts here
          </p>

          <div className="flex items-center justify-center space-x-2 text-purple-300/60">
            <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></div>
            <span className="text-sm font-medium">Track • Focus • Achieve</span>
            <div className="w-2 h-2 rounded-full bg-pink-400 animate-pulse delay-300"></div>
          </div>
        </div>

        {/* Timer container with glassmorphism effect */}
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur opacity-30 animate-pulse"></div>
          <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
            <Timer />
          </div>
        </div>

        {/* Floating stats or motivational elements */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl w-full">
          <div className="text-center p-4 rounded-2xl bg-white/5 backdrop-blur border border-white/10">
            <div className="text-2xl font-bold text-white mb-1">🎯</div>
            <p className="text-purple-200 text-sm">Stay Focused</p>
          </div>
          <div className="text-center p-4 rounded-2xl bg-white/5 backdrop-blur border border-white/10">
            <div className="text-2xl font-bold text-white mb-1">⏱️</div>
            <p className="text-purple-200 text-sm">Track Progress</p>
          </div>
          <div className="text-center p-4 rounded-2xl bg-white/5 backdrop-blur border border-white/10">
            <div className="text-2xl font-bold text-white mb-1">🏆</div>
            <p className="text-purple-200 text-sm">Earn Rewards</p>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
    </div>
  );
}
