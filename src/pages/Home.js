import React from "react";
import HomeStats from "../components/HomeStats";
import { QuickReport } from "../components/QuickReport";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      
      <HomeStats />
      <QuickReport /> 
    </div>
  );
}
