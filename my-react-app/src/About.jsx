import React from "react";
import ProfessionalPic from "./assets/images/Pic.jpg"; // Ensure the path is correct

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-yellow-50 p-6">
      <div className="max-w-3xl mx-auto bg-gray-800 rounded-xl shadow-xl p-8 space-y-8 animate__animated animate__fadeIn animate__delay-1s">
        {/* About Us Title */}
        <h1 className="text-4xl font-extrabold text-yellow-300 text-center animate__animated animate__fadeIn animate__delay-1s">
          About Us
        </h1>

        {/* Introduction Section */}
        <section className="animate__animated animate__fadeIn animate__delay-2s hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/50 hover:border-4 hover:border-pink-500 hover:shadow-[0_0_10px_5px_rgba(255,105,180,0.7)] transition-all duration-300 ease-in-out">
          <h2 className="text-2xl font-semibold text-yellow-200 animate__animated animate__fadeIn animate__delay-2s">
            Introduction
          </h2>
          <p className="text-lg text-gray-200 leading-relaxed animate__animated animate__fadeIn animate__delay-3s">
            Embark on a vibrant journey through India's festivals with FestivalGuide! Explore upcoming celebrations, test your knowledge with quizzes, and discover the festive spirit across the nation – all in one place!
          </p>
        </section>

        {/* Mission and Vision Section */}
        <section className="animate__animated animate__fadeIn animate__delay-4s hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/50 hover:border-4 hover:border-pink-500 hover:shadow-[0_0_10px_5px_rgba(255,105,180,0.7)] transition-all duration-300 ease-in-out">
          <h2 className="text-2xl font-semibold text-yellow-200 animate__animated animate__fadeIn animate__delay-4s">
            Our Mission & Vision
          </h2>
          <p className="text-lg text-gray-200 leading-relaxed animate__animated animate__fadeIn animate__delay-5s">
            My mission is to preserve and promote India's rich cultural heritage by providing a comprehensive platform for exploring and celebrating its diverse festivals.
          </p>
        </section>

        {/* Team or Founders Section */}
        <section className="flex justify-center items-center mt-6 animate__animated animate__fadeIn animate__delay-6s">
          <div className="bg-gray-800 p-8 rounded-lg text-center shadow-xl max-w-md w-full transform transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/50 hover:border-4 hover:border-pink-500 hover:shadow-[0_0_10px_5px_rgba(255,105,180,0.7)] animate__animated animate__fadeIn animate__delay-7s">
            {/* Profile Image */}
            <img
              src={ProfessionalPic} // Ensure the path is correct
              alt="Soham Kalgutkar"
              className="rounded-full mx-auto mb-4 w-32 h-32 object-cover transition-all duration-300 ease-in-out transform hover:scale-110 hover:rotate-3 animate__animated animate__zoomIn animate__delay-8s"
              style={{
                objectPosition: "top", // Ensures the center of the image is shown
                objectFit: "cover", // Ensures it crops to focus on your face
              }}
            />
            <h2 className="text-3xl font-semibold text-yellow-200 mb-2">Solo Developer</h2>
            <h3 className="text-xl font-bold text-yellow-300">Soham Kalgutkar</h3>
            <p className="text-gray-300 mt-2">I am the sole creator and developer behind this project. Every part of the app is crafted with care and dedication.</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
