import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, BarChart, Bar, AreaChart, Area } from "recharts";
import {nutrientData }from "../statics/index"

const NutrientMonitoring = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md ">
      <h2 className="text-lg font-bold mb-4">Nutrient Levels</h2>
      <LineChart width={900} height={300} data={nutrientData}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <CartesianGrid stroke="#ccc" />
        <Line type="monotone" dataKey="pH" stroke="green" strokeWidth={2} />
        <Line type="monotone" dataKey="EC (µS/cm)" stroke="blue" strokeWidth={2} />
      </LineChart>

      <h2 className="text-lg font-bold mt-6 mb-4">Addition of Solution A&B in Liters</h2>
      <AreaChart width={900} height={300} data={nutrientData}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <CartesianGrid stroke="#ccc" />
        <Area type="monotone" dataKey="Addition of Solution A in Liters" stroke="red" fill="lightcoral" strokeWidth={2} />
        <Area type="monotone" dataKey="Addition of Solution B in Liters" stroke="orange" fill="lightyellow" strokeWidth={2} />
      </AreaChart>

      <h2 className="text-lg font-bold mt-6 mb-4">Addition of Nitric Acid & Osmosis water per liter</h2>
      <AreaChart width={900} height={300} data={nutrientData}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <CartesianGrid stroke="#ccc" />
        <Area type="monotone" dataKey="Addition of Nitric Acid" stroke="purple" fill="lavender" strokeWidth={2} />
        <Area type="monotone" dataKey="Addition of osmosis water per liter" stroke="blue" fill="lavender" strokeWidth={2} />
      </AreaChart>
    </div>
  );
};

export default NutrientMonitoring;
