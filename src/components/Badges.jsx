import React from "react";
import { useTimer } from "../context/TimerContext";

export default function Badges() {
  const { badges } = useTimer();

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
        <div className="max-w-6xl w-full space-y-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 shadow-lg">
              <svg
                className="w-8 h-8 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            <h3 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-yellow-200 to-orange-200 bg-clip-text text-transparent mb-4 leading-tight">
              Your Achievements
            </h3>

            <p className="text-xl text-purple-200/80 font-light mb-2">
              {badges.length} {badges.length === 1 ? "badge" : "badges"} earned
              on your journey
            </p>

            <div className="flex items-center justify-center space-x-2 text-purple-300/60">
              <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse"></div>
              <span className="text-sm font-medium">
                Achieve • Unlock • Excel
              </span>
              <div className="w-2 h-2 rounded-full bg-orange-400 animate-pulse delay-300"></div>
            </div>
          </div>

          {/* Badges content with glassmorphism container */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-3xl blur opacity-20 animate-pulse"></div>
            <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
              {badges.length === 0 ? (
                <div className="text-center py-16">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center">
                    <svg
                      className="w-10 h-10 text-purple-300/60"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <p className="text-2xl font-semibold text-white/90 mb-2">
                    No badges yet
                  </p>
                  <p className="text-purple-200/60">
                    Complete timer sessions to earn your first badge!
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {badges.map((badge, i) => (
                    <div
                      key={i}
                      className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-yellow-400/20 via-orange-500/20 to-red-500/20 p-[1px] transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                    >
                      <div className="relative rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 p-6 transition-all duration-300 group-hover:bg-white/20">
                        <div className="flex items-center space-x-4">
                          <div className="flex-shrink-0">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center shadow-lg">
                              <svg
                                className="w-6 h-6 text-white"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-lg font-semibold text-white truncate">
                              {badge}
                            </p>
                            <p className="text-sm text-purple-200/70">
                              Achievement unlocked
                            </p>
                          </div>
                        </div>

                        {/* Shimmer effect */}
                        <div className="absolute inset-0 -top-40 -bottom-40 rotate-12 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-500"></div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {badges.length > 0 && (
            <div className="text-center">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur border border-white/20 text-purple-200/80">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                Keep going to unlock more achievements!
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
    </div>
  );
}
