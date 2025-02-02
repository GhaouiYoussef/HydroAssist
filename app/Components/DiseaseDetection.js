import { useState } from "react";
import powdery from "../statics/Powdery.jpg";
import leafspot from "../statics/LeafSpot.webp";
import rootrot from "../statics/RootRot.jpg";
import Image from 'next/image';

const diseases = [
  {
    id: 1,
    name: "Powdery Mildew",
    row: 3,
    level: 5,
    description: "A fungal disease that appears as white powder on leaves.",
    image: powdery,
    solution: "Apply a baking soda solution and ensure proper air circulation."
  },
  {
    id: 2,
    name: "Root Rot",
    row: 7,
    level: 3,
    description: "Caused by overwatering, leading to black, mushy roots.",
    image: rootrot,
    solution: "Reduce watering, improve drainage, and apply a fungicide."
  },
  {
    id: 3,
    name: "Leaf Spot",
    row: 5,
    level: 1,
    description: "Small brown or black spots appear on leaves due to bacterial infection.",
    image: leafspot,
    solution: "Remove infected leaves and apply copper-based fungicide."
  }
];

const DiseaseDetection = () => {
  const [selectedDisease, setSelectedDisease] = useState(null);
  const [chatMessages, setChatMessages] = useState([]);
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    if (message.trim() !== "") {
      setChatMessages([...chatMessages, { text: message, sender: "user" }]);
      setMessage("");
      setTimeout(() => {
        setChatMessages(prevMessages => [...prevMessages, { text: " Ensure your hydroponic system maintains a consistent temperature between 65°F and 70°F (18°C and 21°C).", sender: "bot" }]);
      }, 1000);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-4">Disease Detection</h2>
      <div className="mb-4">
        {diseases.map((disease) => (
          <button
            key={disease.id}
            onClick={() => setSelectedDisease(disease)}
            className="block w-full text-left p-2 mb-2 bg-red-500 text-white rounded-md hover:bg-red-700 transition"
          >
            Warning [Row {disease.row} - Level {disease.level}]: Potential Start of {disease.name} Symptoms Detected!
          </button>
        ))}
      </div>

      {selectedDisease && (
        <div className="p-4 border border-gray-300 rounded-lg">
          <h3 className="text-xl font-bold mb-2">{selectedDisease.name}</h3>
          <Image src={selectedDisease.image} alt={selectedDisease.name} className="w-full h-48 object-cover rounded-md mb-2" />
          <p className="mb-2"><strong>Description:</strong> {selectedDisease.description}</p>
          <p><strong>Solution:</strong> {selectedDisease.solution}</p>
          <button
            onClick={() => setSelectedDisease(null)}
            className="mt-4 px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-700 transition"
          >
            Close
          </button>
        </div>
      )}

      {/* Chatbot Section */}
      <div className="mt-6 p-4 border border-gray-300 rounded-lg">
        <h3 className="text-lg font-bold mb-2">Chatbot Assistance</h3>
        <div className="h-40 overflow-y-auto bg-gray-100 p-2 mb-2 rounded flex flex-col">
          {chatMessages.map((msg, index) => (
            <div key={index} className={` w-fit p-2 mb-1 rounded ${msg.sender === "user" ? "bg-blue-500 text-white self-end" : "bg-gray-300"}`}>
              {msg.text}
            </div>
          ))}
        </div>
        <div className="flex">
          <input
            type="text"
            className="flex-1 p-2 border rounded-l-md"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ask a question..."
          />
          <button
            onClick={handleSendMessage}
            className="px-4 py-2 bg-green-500 text-white rounded-r-md hover:bg-green-700 transition"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default DiseaseDetection;
