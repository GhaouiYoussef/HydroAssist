const Sidebar = ({ setActiveTab }) => {
  return (
    <div className="w-64 h-screen shadow-md flex flex-col p-4 bg-[#31511E] text-white">
      <h2 className="text-lg font-bold mb-4">Hydroponic Dashboard</h2>
      <button onClick={() => setActiveTab("nutrients")} className="flex items-center mb-3 hover:underline">
        Nutrient Monitoring
      </button>
      <button onClick={() => setActiveTab("stock")} className="flex items-center mb-3 hover:underline">
        Stock Management
      </button>
      <button onClick={() => setActiveTab("disease")} className="flex items-center mb-3 hover:underline">
        Disease Detection
      </button>
    <button onClick={() => setActiveTab("marketplace")} className="flex items-center mb-3 hover:underline">
      Market Place
    </button>
    </div>
  );
};

export default Sidebar; // ✅ Ensure this is a default export
