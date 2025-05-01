import React, { useRef } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import videohero from "./assets/videos/videohero.mp4"; // Import your video file

const Hero = () => {
  const videoRef = useRef(null);
  const navigate = useNavigate(); // Hook for navigation

  // Function to toggle the video play/pause when clicked
  const toggleVideo = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play(); // Start the video
      } else {
        videoRef.current.pause(); // Pause the video
        videoRef.current.currentTime = 0; // Reset video to start
      }
    }
  };

  return (
    <div className="hero min-h-screen relative">
      {/* Video Background */}
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        onClick={toggleVideo} // Toggle play/pause on click anywhere on the video
      >
        <source src={videohero} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for better text contrast */}
      <div className="hero-overlay bg-opacity-50 bg-black"></div>

      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          {/* Heading with Gradient Text */}
          <h1 className="mb-5 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500">
            Step into the Heart of Indian Traditions
          </h1>

          {/* Paragraph with Gradient Text */}
          <p className="mb-5 text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
            "Discover India's Timeless Traditions and Festive Joys."
          </p>

          {/* Button to Explore Festivals */}
          <button
            className="btn text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-blue-500 hover:to-green-400 transition-all duration-300 ease-in-out"
            onClick={() => navigate("/Festivals")} // Navigate to the CardPage route
          >
            Explore Festivals
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
