import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate(); // Create navigate function

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Navigation handlers
  const goToHome = () => navigate("/"); // Navigate to the home page
  const goToAbout = () => navigate("/about"); // Navigate to the About page
  const goToContact = () => navigate("/contact"); // Navigate to the Contact page
  const goToQuiz = () => navigate("/quiz"); // Navigate to the Quiz page

  return (
    <div className="navbar bg-gray-800 text-white">
      <div className="flex-1">
        {/* Apply Gradient and Glow Effect to FestivalGuide */}
        <a
          className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-yellow-500 hover:to-pink-500 hover:text-2xl hover:shadow-lg hover:shadow-pink-500 transition-all duration-300 ease-in-out cursor-pointer"
          onClick={goToHome} // Navigate to home on click
        >
          FestivalGuide
        </a>
      </div>
      <div className="flex-none">
        {/* Menu Button for Small Screens */}
        <button
          onClick={toggleMenu}
          className="btn btn-primary md:hidden bg-gradient-to-r from-yellow-400 to-red-500 text-white text-lg font-bold py-2 px-6 rounded-full hover:from-yellow-500 hover:to-red-600 transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-yellow-500/50"
        >
          Menu
        </button>

        {/* Menu for Medium Screens and Larger */}
        <ul className="menu menu-horizontal px-1 hidden md:flex">
          <li>
            <button
              onClick={goToHome}
              className="text-yellow-500 hover:text-yellow-400 text-lg font-semibold transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-xl hover:shadow-yellow-500/50"
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={goToAbout}
              className="text-yellow-500 hover:text-yellow-400 text-lg font-semibold transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-xl hover:shadow-yellow-500/50"
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={goToContact}
              className="text-yellow-500 hover:text-yellow-400 text-lg font-semibold transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-xl hover:shadow-yellow-500/50"
            >
              Contact
            </button>
          </li>
          <li>
            <button
              onClick={goToQuiz} // Navigate to Quiz when clicked
              className="text-yellow-500 hover:text-yellow-400 text-lg font-semibold transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-xl hover:shadow-yellow-500/50"
            >
              Quiz
            </button>
          </li>
        </ul>

        {/* Collapsible Menu for Small Screens */}
        {isMenuOpen && (
          <ul className="menu menu-vertical bg-gray-800 text-white md:hidden">
            <li>
              <button
                onClick={goToHome}
                className="text-yellow-500 hover:text-yellow-400 text-lg font-semibold transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-xl hover:shadow-yellow-500/50"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={goToAbout}
                className="text-yellow-500 hover:text-yellow-400 text-lg font-semibold transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-xl hover:shadow-yellow-500/50"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={goToContact}
                className="text-yellow-500 hover:text-yellow-400 text-lg font-semibold transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-xl hover:shadow-yellow-500/50"
              >
                Contact
              </button>
            </li>
            <li>
              <button
                onClick={goToQuiz} // Navigate to Quiz when clicked
                className="text-yellow-500 hover:text-yellow-400 text-lg font-semibold transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-xl hover:shadow-yellow-500/50"
              >
                Quiz
              </button>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
