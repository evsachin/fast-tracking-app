// src/App.js
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import HistoryPage from "./pages/HistoryPage";
import { TimerProvider } from "./context/TimerContext";

function Navigation() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
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
            <span className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              TimerApp
            </span>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-1">
            <Link
              to="/"
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                isActive("/")
                  ? "bg-blue-100 text-blue-700 shadow-sm"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              }`}
            >
              <div className="flex items-center space-x-2">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                <span>Home</span>
              </div>
            </Link>

            <Link
              to="/history"
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                isActive("/history")
                  ? "bg-purple-100 text-purple-700 shadow-sm"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              }`}
            >
              <div className="flex items-center space-x-2">
                <svg
                  className="w-4 h-4"
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
                <span>History</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default function App() {
  return (
    <TimerProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
          <Navigation />
          <main className="max-w-4xl mx-auto px-2 py-2">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/history" element={<HistoryPage />} />
            </Routes>
          </main>
        </div>
      </Router>
    </TimerProvider>
  );
}
