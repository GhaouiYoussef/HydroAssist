"use client"
import { useState } from "react";
import  Sidebar  from "./Components/Sidebar";
import  NutrientMonitoring  from "./Components/NutrientMonitoring";
import  StockManagement  from "./Components/StockManagement";
import DiseaseDetection from "./Components/DiseaseDetection";
import MarketPlace from "./Components/MarketPlace";

function App() {
  const [activeTab, setActiveTab] = useState("nutrients");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-gray-200">
      {sidebarOpen && <Sidebar setActiveTab={setActiveTab} />}
      <div className="flex-1 p-6 overflow-auto">
        <button 
          className="mb-4 p-2 bg-[#31511E] text-white rounded-md hover:bg-[#F6FCDF] hover:text-[#1A1A19]"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? "Hide Sidebar" : "Show Sidebar"}
        </button>
        {activeTab === "nutrients" && <NutrientMonitoring />}
        {activeTab === "stock" && <StockManagement />}
        {activeTab === "disease" && <DiseaseDetection />}
        {activeTab === "marketplace" && <MarketPlace />}
      </div>
    </div>
  );
}

export default App;
