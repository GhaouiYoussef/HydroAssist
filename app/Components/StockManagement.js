import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, BarChart, Bar } from "recharts";
import { useState } from "react";

const stockData = [
  { name: "Solution A", quantity: 10, status: "Good", needed: 10 },
  { name: "Nitric Acid", quantity: 3, status: "Low", needed: 10 },
  { name: "Solution B", quantity: 5, status: "Medium", needed: 8 },
];

const reportData = [
  { name: "Solution A", used: 40 },
  { name: "Nitric Acid", used: 25 },
  { name: "Solution B", used: 30 },
];

const predictionsData = [
  { name: "Current", SolutionA: 10, NitricAcid: 3, SolutionB: 5 },
  { name: "+5", SolutionA: 8, NitricAcid: 2, SolutionB: 4 },
  { name: "+10", SolutionA: 11, NitricAcid: 5, SolutionB: 3 },
];

const StockManagement = () => {
  const [showChart, setShowChart] = useState(false);
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-4">Nutrient Stock Levels</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">Nutrient</th>
            <th className="border border-gray-300 px-4 py-2">Quantity</th>
            <th className="border border-gray-300 px-4 py-2">Needed</th>
            <th className="border border-gray-300 px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {stockData.map((item, index) => (
            <tr key={index} className="text-center">
              <td className="border border-gray-300 px-4 py-2">{item.name}</td>
              <td className="border border-gray-300 px-4 py-2">{item.quantity}L</td>
              <td className="border border-gray-300 px-4 py-2">{item.needed}L</td>
              <td className={`border border-gray-300 px-4 py-2 ${item.quantity < item.needed ? "bg-red-500 text-white" : "text-green-500"}`}>
                {item.quantity < item.needed ? "Warning: Low Stock" : item.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Predictions Dashboard */}
      <div className="mt-6 p-6 bg-[#859F3D] rounded-lg shadow-md">
        <h2 className="text-lg font-bold mb-4 text-[#F6FCDF]">Predicted Stock Needs</h2>
        <div className=" bg-white rounded-lg">
        <LineChart width={600} height={300} data={predictionsData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <CartesianGrid stroke="#ccc" />
            <Line type="step" dataKey="SolutionA" stroke="green" strokeWidth={2} />
            <Line type="step" dataKey="NitricAcid" stroke="red" strokeWidth={2} />
            <Line type="step" dataKey="SolutionB" stroke="blue" strokeWidth={2} />
          </LineChart>
        </div>
      </div>
      {/* Reports Dashboard */}
      <div className="mt-6 p-4 bg-[#F6FCDF] rounded-lg shadow-md">
        <h2 className="text-lg font-bold mb-4 text-[#31511E]">Stock Reports</h2>
        <button 
          className="px-4 py-2 bg-[#31511E] text-white rounded-md hover:bg-white hover:text-[#31511E] hover:border-[#31511E] hover:border-2 transition" 
          onClick={() => setShowChart(!showChart)}
        >
          {showChart ? "Hide Chart" : "Show Report Chart"}
        </button>
        {showChart && (
          <BarChart width={500} height={300} data={reportData} className="mt-4">
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <CartesianGrid stroke="#ccc" />
            <Bar dataKey="used" fill="#31511E" />
          </BarChart>
        )}
      </div>
    </div>
  );
};

export default StockManagement;
