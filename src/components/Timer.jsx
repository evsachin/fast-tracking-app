import React, { useState, useEffect } from "react";
import { useTimer } from "../context/TimerContext";

const formatTime = (seconds) => {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  return { hours: h, minutes: m, seconds: s };
};

// Animated Number Component
const AnimatedNumber = ({ value, className = "", size = "text-2xl" }) => {
  const [displayValue, setDisplayValue] = useState(value);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (value !== displayValue) {
      setIsAnimating(true);
      const timer = setTimeout(() => {
        setDisplayValue(value);
        setIsAnimating(false);
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [value, displayValue]);

  return (
    <span
      className={`${className} ${size} transition-all duration-300 ${
        isAnimating ? "scale-110 text-purple-300" : "scale-100"
      }`}
    >
      {String(displayValue).padStart(2, "0")}
    </span>
  );
};

export default function Timer() {
  const { isRunning, elapsed, startTimer, stopTimer } = useTimer();
  const { hours, minutes, seconds } = formatTime(elapsed);

  // Calculate circular progress for seconds (0-59 seconds = 0-100%)
  const secondsProgress = (seconds / 60) * 100;
  const circumference = 2 * Math.PI * 45; // radius = 45
  const strokeDasharray = circumference;
  const strokeDashoffset =
    circumference - (secondsProgress / 100) * circumference;

  // Calculate overall progress for the outer ring (12 hours total)
  const totalMinutes = hours * 60 + minutes;
  const overallProgress = Math.min((totalMinutes / 720) * 100, 100);
  const outerStrokeDashoffset =
    circumference - (overallProgress / 100) * circumference;

  // Determine fasting phase
  let phase = "Starting";
  let phaseColor = "text-blue-300";
  let phaseDescription = "Your fasting journey begins";

  if (totalMinutes >= 720) {
    // 12+ hours
    phase = "Deep Fast";
    phaseColor = "text-green-300";
    phaseDescription = "Maximum benefits achieved";
  } else if (totalMinutes >= 480) {
    // 8+ hours
    phase = "Fat Burning";
    phaseColor = "text-orange-300";
    phaseDescription = "Body switching to fat for energy";
  } else if (totalMinutes >= 240) {
    // 4+ hours
    phase = "Metabolic Switch";
    phaseColor = "text-yellow-300";
    phaseDescription = "Insulin levels dropping";
  } else if (totalMinutes >= 60) {
    // 1+ hours
    phase = "Early Phase";
    phaseColor = "text-purple-300";
    phaseDescription = "Digestion completing";
  }

  return (
    <div className="text-center space-y-8 w-full max-w-2xl mx-auto">
      {/* Main Timer Display */}
      <div className="relative">
        {/* Outer glow ring */}
        <div
          className={`absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 blur opacity-20 ${
            isRunning ? "animate-pulse" : ""
          }`}
        ></div>

        {/* Timer circle */}
        <div className="relative w-80 h-80 mx-auto">
          {/* Background circle */}
          <div className="absolute inset-0 rounded-full bg-white/5 backdrop-blur border border-white/20"></div>

          {/* Progress rings */}
          <svg
            className="absolute inset-0 w-full h-full transform -rotate-90"
            viewBox="0 0 100 100"
          >
            {/* Background track */}
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="2"
            />

            {/* Outer ring - Overall progress (12 hours) */}
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="url(#outerGradient)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray={strokeDasharray}
              strokeDashoffset={outerStrokeDashoffset}
              className="transition-all duration-1000 ease-out opacity-60"
            />

            {/* Inner ring - Seconds progress (completes every minute) */}
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="url(#innerGradient)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray={strokeDasharray}
              strokeDashoffset={strokeDashoffset}
              className={`transition-all duration-1000 ease-linear ${
                isRunning ? "animate-pulse" : ""
              }`}
              style={{
                transition: isRunning
                  ? "stroke-dashoffset 1s linear"
                  : "stroke-dashoffset 0.3s ease-out",
              }}
            />

            {/* Gradients */}
            <defs>
              <linearGradient
                id="outerGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#8B5CF6" />
                <stop offset="50%" stopColor="#EC4899" />
                <stop offset="100%" stopColor="#F59E0B" />
              </linearGradient>
              <linearGradient
                id="innerGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#06D6A0" />
                <stop offset="50%" stopColor="#118AB2" />
                <stop offset="100%" stopColor="#073B4C" />
              </linearGradient>
            </defs>
          </svg>

          {/* Timer content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="text-center space-y-2">
              {/* Time display */}
              <div className="space-y-1">
                {/* Hours */}
                <AnimatedNumber
                  value={hours}
                  className="font-bold text-white"
                  size="text-5xl"
                />

                {/* Minutes and Seconds */}
                <div className="flex items-center justify-center space-x-4">
                  <AnimatedNumber
                    value={minutes}
                    className="font-semibold text-white/80"
                    size="text-2xl"
                  />
                  <span
                    className={`text-white/40 transition-all duration-500 ${
                      isRunning ? "animate-pulse text-cyan-400 scale-110" : ""
                    }`}
                  >
                    :
                  </span>
                  <AnimatedNumber
                    value={seconds}
                    className="font-semibold text-cyan-300"
                    size="text-2xl"
                  />
                </div>

                <div className="text-xs text-white/60 tracking-wider">
                  HOURS MINUTES SECONDS
                </div>
              </div>
            </div>
          </div>

          {/* Seconds indicator dot */}
          <div
            className="absolute w-3 h-3 bg-cyan-400 rounded-full shadow-lg transition-all duration-1000 ease-linear"
            style={{
              top: "50%",
              left: "50%",
              transform: `translate(-50%, -50%) rotate(${
                seconds * 6 - 90
              }deg) translateY(-40px)`,
              boxShadow: "0 0 10px rgba(6, 214, 160, 0.8)",
            }}
          />
        </div>
      </div>

      {/* Progress Info */}
      <div className="space-y-3">
        <div className="flex justify-center space-x-8 text-sm">
          <div className="text-center">
            <div className="w-4 h-4 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mx-auto mb-1"></div>
            <span className="text-cyan-300 font-medium">{seconds}s</span>
            <div className="text-white/60 text-xs">This Minute</div>
          </div>
          <div className="text-center">
            <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-1"></div>
            <span className="text-purple-300 font-medium">
              {Math.round(overallProgress)}%
            </span>
            <div className="text-white/60 text-xs">Overall Progress</div>
          </div>
        </div>

        <div
          className={`text-xl font-semibold ${phaseColor} transition-all duration-500`}
        >
          {phase}
        </div>
        <div className="text-purple-200/70 text-sm transition-all duration-500">
          {phaseDescription}
        </div>
      </div>

      {/* Control Button */}
      <div className="flex justify-center">
        <button
          onClick={isRunning ? stopTimer : startTimer}
          className={`relative group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl ${
            isRunning ? "animate-pulse" : ""
          }`}
        >
          {/* Button glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity"></div>

          {/* Button content */}
          <div className="relative flex items-center justify-center space-x-3">
            {isRunning ? (
              <>
                <svg
                  className="w-6 h-6 transition-transform duration-300 group-hover:scale-110"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 10h6v4H9z"
                  />
                </svg>
                <span>Stop Fasting</span>
              </>
            ) : (
              <>
                <svg
                  className="w-6 h-6 transition-transform duration-300 group-hover:scale-110"
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
                <span>Start Fasting</span>
              </>
            )}
          </div>
        </button>
      </div>

      {/* Quick Stats */}
      {elapsed > 0 && (
        <div className="grid grid-cols-2 gap-4 mt-8">
          <div className="text-center p-4 rounded-xl bg-white/5 backdrop-blur border border-white/10 transition-all duration-300 hover:bg-white/10">
            <div className="text-2xl font-bold text-white mb-1 transition-all duration-500">
              {Math.round((elapsed / 3600) * 10) / 10}
            </div>
            <div className="text-xs text-purple-200/70">Hours Fasted</div>
          </div>
          <div className="text-center p-4 rounded-xl bg-white/5 backdrop-blur border border-white/10 transition-all duration-300 hover:bg-white/10">
            <div className="text-2xl font-bold text-white mb-1 transition-all duration-500">
              {Math.round((elapsed / 3600) * 0.5 * 10) / 10}
            </div>
            <div className="text-xs text-purple-200/70">Calories Burned</div>
          </div>
        </div>
      )}
    </div>
  );
}
