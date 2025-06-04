// src/context/TimerContext.js
import React, { createContext, useContext, useState, useEffect } from "react";
import { saveToLocal, getFromLocal } from "../utils/storage";

const TimerContext = createContext();

export const TimerProvider = ({ children }) => {
  const [isRunning, setIsRunning] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [elapsed, setElapsed] = useState(0);
  const [history, setHistory] = useState(getFromLocal("history"));
  const [badges, setBadges] = useState(getFromLocal("badges"));

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        setElapsed(Math.floor((Date.now() - startTime) / 1000));
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isRunning, startTime]);

  const startTimer = () => {
    setIsRunning(true);
    setStartTime(Date.now());
  };

  const stopTimer = () => {
    const duration = (Date.now() - startTime) / 1000;
    const newSession = { time: Date.now(), duration };
    const updatedHistory = [...history, newSession];
    const newBadge = calculateBadge(updatedHistory);
    const updatedBadges = newBadge ? [...badges, newBadge] : badges;

    setHistory(updatedHistory);
    setBadges(updatedBadges);
    saveToLocal("history", updatedHistory);
    saveToLocal("badges", updatedBadges);
    setIsRunning(false);
    setElapsed(0);
    setStartTime(null);
  };

  const calculateBadge = (sessions) => {
    const streak = sessions.slice(-3).every((s) => s.duration >= 10800);
    if (streak && sessions.length >= 15) return "Product Manager";
    if (streak && sessions.length >= 10) return "Tech Lead";
    if (streak && sessions.length >= 6) return "Sr Engineer";
    if (streak && sessions.length >= 3) return "Junior Engineer";
    if (streak) return "Fresher";
    return null;
  };

  return (
    <TimerContext.Provider
      value={{ isRunning, elapsed, startTimer, stopTimer, history, badges }}
    >
      {children}
    </TimerContext.Provider>
  );
};

export const useTimer = () => useContext(TimerContext);
