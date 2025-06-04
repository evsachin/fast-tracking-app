// src/pages/HistoryPage.js
import React from "react";
import History from "../components/History";
import Badges from "../components/Badges";

export default function HistoryPage() {
  return (
    <div className="min-h-screen space-y-8">
      <History />
      <Badges />
    </div>
  );
}
