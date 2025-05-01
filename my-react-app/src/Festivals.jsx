import React, { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
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

const Festivals = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredFestivals, setFilteredFestivals] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [upcomingFestivals, setUpcomingFestivals] = useState([]);
  const [selectedFestival, setSelectedFestival] = useState(null);
  const currentYear = new Date().getFullYear();

  const festivalImages = {
    "Makar Sankranti": MakarSankranti,
    "Republic Day": RepublicDay,
    Holi: Holi,
    "Eid-ul-Fitr": Eid,
    "Raksha Bandhan": RakshaBandhan,
    "Independence Day": IndependenceDay,
    "Ganesh Chaturthi": GaneshChaturthi,
    Dussehra: Dussehra,
    Diwali: Diwali,
    Christmas: Christmas,
  };

  const festivalDescriptions = {
    "Makar Sankranti": "Kite flying during Makar Sankranti has ancient origins, possibly linked to ancient rituals involving offering prayers to the Sun god using kites. In some regions, people perform a unique ritual called 'til gud' where they offer sesame seeds (til) and jaggery (gud) to each other as a symbol of sweetness and prosperity.",
    "Republic Day": "The Indian Constitution, the longest written constitution in the world, took nearly three years to draft and was adopted by the Constituent Assembly on November 26, 1949. It came into effect on January 26, 1950. The Beating Retreat Ceremony held on January 29th features a mesmerizing display of massed bands from the Indian Armed Forces.",
    "Holi": "The festival derives its name from Holika, the sister of the demon king Hiranyakashipu, who was consumed by the fire she had prepared to kill her nephew, Prahlad, a devotee of Lord Vishnu. In some regions, Holi celebrations include a unique tradition called 'Lathmar Holi' where women playfully beat men with sticks, symbolizing the playful banter between Radha and Krishna.",
    "Eid-ul-Fitr": "Zakat, one of the five pillars of Islam, is a mandatory charitable contribution given to the needy during Eid-ul-Fitr. The sighting of the new moon marks the end of Ramadan and the beginning of Eid-ul-Fitr celebrations.",
    "Raksha Bandhan": "While the modern form of Raksha Bandhan is widely celebrated, its origins can be traced back to ancient India, with historical accounts of Rajput rulers exchanging Rakhis with other rulers as a symbol of alliance. In some regions, Rakhis are also tied to friends, neighbors, and even deities.",
    "Independence Day": "Jawaharlal Nehru, India's first Prime Minister, delivered his famous 'Tryst with Destiny' speech to the Constituent Assembly on the eve of India's independence. The Prime Minister hoists the Indian flag at the Red Fort in Delhi, followed by a 21-gun salute.",
    "Ganesh Chaturthi": "In recent years, there has been a growing movement towards creating eco-friendly Ganesha idols made from clay and natural colors, which dissolve easily in water after immersion. Modak, a sweet dumpling filled with coconut and jaggery, is considered Lord Ganesha's favorite offering.",
    "Dussehra": "Ram Lila, a dramatic re-enactment of the Ramayana epic, is a popular tradition during the days leading up to Dussehra. Lord Rama's victory over Ravana is attributed to his skillful archery. The bow and arrow remain significant symbols during Dussehra celebrations.",
    "Diwali": "Diwali is believed to mark the return of Lord Vishnu (Narayana) and his consort, Lakshmi, the goddess of wealth, to Earth. Rangoli, intricate designs created on floors using colored powders, are believed to welcome Lakshmi into homes.",
    "Christmas": "Singing Christmas carols is a beloved tradition in many parts of the world, with caroling groups going door-to-door spreading joy and goodwill. The figure of Santa Claus is based on St. Nicholas, a 4th-century Christian bishop known for his generosity towards children.",
  };

  const festivals = useMemo(
    () => [
      { id: 1, name: "Makar Sankranti", date: `${currentYear}-01-14`, description: "Festival dedicated to the Sun God." },
      { id: 2, name: "Republic Day", date: `${currentYear}-01-26`, description: "Celebration of India's Constitution." },
      { id: 3, name: "Holi", date: `${currentYear}-03-24`, description: "Festival of colors and joy." },
      { id: 4, name: "Eid-ul-Fitr", date: `${currentYear}-04-22`, description: "Festival marking the end of Ramadan." },
      { id: 5, name: "Raksha Bandhan", date: `${currentYear}-08-08`, description: "Celebrating the bond of siblings." },
      { id: 6, name: "Independence Day", date: `${currentYear}-08-15`, description: "India's Independence Day." },
      { id: 7, name: "Ganesh Chaturthi", date: `${currentYear}-09-16`, description: "Celebration of Lord Ganesha." },
      { id: 8, name: "Dussehra", date: `${currentYear}-10-23`, description: "Victory of good over evil." },
      { id: 9, name: "Diwali", date: `${currentYear}-11-12`, description: "Festival of lights and prosperity." },
      { id: 10, name: "Christmas", date: `${currentYear}-12-25`, description: "Celebration of the birth of Jesus Christ." },
    ],
    [currentYear]
  );

  useEffect(() => {
    const today = new Date();
    const sortedFestivals = festivals
      .filter((festival) => new Date(festival.date) >= today)
      .sort((a, b) => new Date(a.date) - new Date(b.date));
    setUpcomingFestivals(sortedFestivals.slice(0, 3));
  }, [festivals]);

  const handleSearch = () => {
    const filtered = festivals.filter((festival) =>
      festival.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredFestivals(filtered);
    setSuggestions([]);
  };

  useEffect(() => {
    if (searchQuery) {
      const matches = festivals
        .filter((festival) =>
          festival.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .map((festival) => festival.name);
      setSuggestions(matches.slice(0, 5));
    } else {
      setSuggestions([]);
    }
  }, [searchQuery, festivals]);

  const calculateCountdown = (festivalDate) => {
    const today = new Date();
    const festival = new Date(festivalDate);
    const diffTime = festival - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? `${diffDays} days left` : diffDays === 0 ? "Today!" : "Past!";
  };

  const festivalsToDisplay = searchQuery ? filteredFestivals : upcomingFestivals;

  const handleClick = (festival) => {
    // Add detailed description from festivalDescriptions
    setSelectedFestival({
      ...festival,
      description: festivalDescriptions[festival.name],
    });
  };

  const handleBackToList = () => {
    setSelectedFestival(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-800 text-yellow-400 p-6">
      {selectedFestival ? (
        <div className="text-center animate__animated animate__fadeIn">
          <h2 className="text-3xl font-extrabold text-yellow-300">{selectedFestival.name}</h2>
          <p className="text-lg italic">{selectedFestival.description}</p>
          <button
            className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-6 py-3 rounded-lg shadow-lg mt-6"
            onClick={handleBackToList}
          >
            Back to Festivals List
          </button>
        </div>
      ) : (
        <>
          <div className="mb-10 flex flex-col items-center space-y-4 animate__animated animate__fadeIn">
            <div className="relative w-full max-w-2xl">
              <input
                className="w-full bg-gray-800 text-yellow-400 placeholder:text-yellow-500 text-lg border border-yellow-500 rounded-lg pr-3 pl-5 py-3 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-yellow-600 shadow-md"
                placeholder="Search festivals..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {suggestions.length > 0 && (
                <div className="absolute top-full mt-1 w-full bg-gray-800 rounded-lg shadow-lg z-10 animate__animated animate__fadeIn">
                  {suggestions.map((suggestion, index) => (
                    <div
                      key={index}
                      className="px-4 py-2 text-yellow-400 cursor-pointer hover:bg-yellow-500 hover:text-gray-800 transition"
                      onClick={() => {
                        setSearchQuery(suggestion);
                        setSuggestions([]);
                      }}
                    >
                      {suggestion}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <button
              className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-6 py-3 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {festivalsToDisplay.length === 0 ? (
              <p className="text-center text-lg font-semibold text-yellow-400 col-span-full">
                No festivals found. Try another search!
              </p>
            ) : (
              festivalsToDisplay.map((festival) => (
                <div
                  key={festival.id}
                  className="relative card h-96 rounded-xl shadow-lg transition-transform duration-500 transform hover:scale-110 hover:shadow-2xl overflow-hidden group"
                  style={{
                    backgroundImage: `url(${festivalImages[festival.name]})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-70 rounded-xl flex flex-col justify-between p-4 text-white group-hover:bg-opacity-50 transition-all">
                    <h2 className="text-3xl font-extrabold text-yellow-300 group-hover:text-yellow-500 transition">
                      {festival.name}
                    </h2>
                    <p className="text-md italic">{festival.description}</p>
                    <p className="text-sm font-semibold">{calculateCountdown(festival.date)}</p>
                    <button
                      className="mt-auto bg-yellow-500 text-black px-4 py-2 rounded shadow-md group-hover:bg-yellow-600 transition-all"
                      onClick={() => handleClick(festival)}
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Festivals;
