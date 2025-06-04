import React from "react";
import { useTimer } from "../context/TimerContext";
import dayjs from "dayjs";

export default function History() {
  const { history } = useTimer();

  // Calculate total fasting time
  const totalSeconds = history.reduce((sum, h) => sum + h.duration, 0);
  const totalHours = Math.floor(totalSeconds / 3600);
  const totalDays = Math.floor(totalHours / 24);

  // Get average fasting duration
  const avgSeconds = history.length > 0 ? totalSeconds / history.length : 0;
  const avgHours = Math.floor(avgSeconds / 3600);
  const avgMinutes = Math.floor((avgSeconds % 3600) / 60);

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
            <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-gradient-to-r from-blue-400 to-teal-500 shadow-lg">
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
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>

            <h3 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-200 to-teal-200 bg-clip-text text-transparent mb-4 leading-tight">
              Fasting History
            </h3>

            <p className="text-xl text-purple-200/80 font-light mb-2">
              Your journey through {history.length}{" "}
              {history.length === 1 ? "session" : "sessions"}
            </p>

            <div className="flex items-center justify-center space-x-2 text-purple-300/60">
              <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
              <span className="text-sm font-medium">
                Track • Analyze • Improve
              </span>
              <div className="w-2 h-2 rounded-full bg-teal-400 animate-pulse delay-300"></div>
            </div>
          </div>

          {/* Stats section */}
          {history.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl">
                <div className="text-3xl font-bold text-white mb-2">
                  {history.length}
                </div>
                <div className="text-blue-200/80 text-sm font-medium">
                  Total Sessions
                </div>
              </div>
              <div className="text-center p-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl">
                <div className="text-3xl font-bold text-white mb-2">
                  {totalDays > 0
                    ? `${totalDays}d ${totalHours % 24}h`
                    : `${totalHours}h`}
                </div>
                <div className="text-purple-200/80 text-sm font-medium">
                  Total Time
                </div>
              </div>
              <div className="text-center p-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl">
                <div className="text-3xl font-bold text-white mb-2">
                  {avgHours}h {avgMinutes}m
                </div>
                <div className="text-teal-200/80 text-sm font-medium">
                  Average Duration
                </div>
              </div>
            </div>
          )}

          {/* History content with glassmorphism container */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-teal-500 rounded-3xl blur opacity-20 animate-pulse"></div>
            <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
              {history.length === 0 ? (
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
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <p className="text-2xl font-semibold text-white/90 mb-2">
                    No history yet
                  </p>
                  <p className="text-purple-200/60">
                    Complete your first fasting session to see it here!
                  </p>
                </div>
              ) : (
                <div className="space-y-4 max-h-96 overflow-y-auto custom-scrollbar">
                  {history.map((h, i) => {
                    const hours = Math.floor(h.duration / 3600);
                    const minutes = Math.floor((h.duration % 3600) / 60);
                    const date = dayjs(h.time);
                    const isToday = date.isSame(dayjs(), "day");
                    const isYesterday = date.isSame(
                      dayjs().subtract(1, "day"),
                      "day"
                    );

                    let dateLabel;
                    if (isToday) dateLabel = "Today";
                    else if (isYesterday) dateLabel = "Yesterday";
                    else dateLabel = date.format("DD MMM YYYY");

                    return (
                      <div
                        key={i}
                        className="group relative overflow-hidden rounded-xl bg-white/5 backdrop-blur border border-white/10 p-4 transition-all duration-300 hover:bg-white/10 hover:scale-[1.02]"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="flex-shrink-0">
                              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-teal-500 flex items-center justify-center shadow-lg">
                                <svg
                                  className="w-5 h-5 text-white"
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
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-lg font-semibold text-white">
                                {hours}h {minutes}m
                              </p>
                              <p className="text-sm text-blue-200/70">
                                {dateLabel} • {date.format("HH:mm")}
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center space-x-2">
                            {hours >= 16 && (
                              <div className="px-2 py-1 rounded-lg bg-green-500/20 border border-green-400/30">
                                <span className="text-xs font-medium text-green-300">
                                  Long Fast
                                </span>
                              </div>
                            )}
                            {hours >= 12 && hours < 16 && (
                              <div className="px-2 py-1 rounded-lg bg-blue-500/20 border border-blue-400/30">
                                <span className="text-xs font-medium text-blue-300">
                                  Good
                                </span>
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Subtle shimmer effect */}
                        <div className="absolute inset-0 -top-40 -bottom-40 rotate-12 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-500"></div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          {history.length > 0 && (
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
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
                Keep tracking to see your progress trends!
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>

      {/* Custom scrollbar styles */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.3);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.5);
        }
      `}</style>
    </div>
  );
}
