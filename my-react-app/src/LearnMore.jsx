import React from "react";
import { useParams } from "react-router-dom";
import MakarSankranti from "./assets/images/MakarSankranti.jpg";
import RepublicDay from "./assets/images/RepublicDay.jpg";   
import Holi from "./assets/images/Holi.jpg";
import Eid from "./assets/images/Eid.jpg";
import RakshaBandhan from "./assets/images/RakshaBandhan.jpg";
import IndependenceDay from "./assets/images/IndependenceDay.jpg";
import GaneshChaturthi from "./assets/images/GaneshChaturthi.jpg";
import Dussehra from "./assets/images/Dussehra.jpg";
import Diwali from "./assets/images/Diwali.jpg";
import Christmas from "./assets/images/Christmas.jpg";
import "./App.css";

const festivalDescriptions = {
  1: {
    name: "Makar Sankranti",
    description: "Makar Sankranti: Kite flying during Makar Sankranti..."
  },
  2: {
    name: "Republic Day",
    description: "Republic Day: The Indian Constitution..."
  },
  3: {
    name: "Holi",
    description: "Holi: The festival derives its name from Holika..."
  },
  4: {
    name: "Eid-ul-Fitr",
    description: "Eid-ul-Fitr: Zakat, one of the five pillars of Islam..."
  },
  5: {
    name: "Raksha Bandhan",
    description: "Raksha Bandhan: While the modern form of Raksha Bandhan..."
  },
  6: {
    name: "Independence Day",
    description: "Independence Day: Jawaharlal Nehru delivered his famous speech..."
  },
  7: {
    name: "Ganesh Chaturthi",
    description: "Ganesh Chaturthi: There is a growing movement towards eco-friendly idols..."
  },
  8: {
    name: "Dussehra",
    description: "Dussehra: Ram Lila, a dramatic re-enactment of the Ramayana..."
  },
  9: {
    name: "Diwali",
    description: "Diwali: Diwali is believed to mark the return of Lord Vishnu..."
  },
  10: {
    name: "Christmas",
    description: "Christmas: Singing Christmas carols is a beloved tradition..."
  },
};

const festivalImages = {
  "Makar Sankranti": MakarSankranti,
  "Republic Day": RepublicDay,
  "Holi": Holi,
  "Eid-ul-Fitr": Eid,
  "Raksha Bandhan": RakshaBandhan,
  "Independence Day": IndependenceDay,
  "Ganesh Chaturthi": GaneshChaturthi,
  "Dussehra": Dussehra,
  "Diwali": Diwali,
  "Christmas": Christmas,
};

const LearnMore = () => {
  const { id } = useParams();
  const festival = festivalDescriptions[parseInt(id)];
  if (!festival) {
    return (
      <div className="min-h-screen flex justify-center items-center text-white">
        Festival not found.
      </div>
    );
  }

  const image = festivalImages[festival.name];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-yellow-50 p-6 flex justify-center items-center">
      <div className="max-w-2xl w-full bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
        {image && (
          <img
            src={image}
            alt={festival.name}
            className="w-full h-64 object-cover"
          />
        )}
        <div className="p-6">
          <h2 className="text-3xl font-bold text-yellow-300 mb-4 text-center">
            {festival.name}
          </h2>
          <p className="text-yellow-100 text-lg italic">{festival.description}</p>
          <div className="mt-6 text-center">
            <button
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-6 rounded-full transition duration-300"
              onClick={() => window.history.back()}
            >
              Back to Festivals List
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnMore;
