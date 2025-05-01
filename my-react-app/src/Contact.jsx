import React from "react";
import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-yellow-50 p-6">
      <div className="max-w-4xl mx-auto bg-gray-800 rounded-xl shadow-xl p-8 space-y-12 animate__animated animate__fadeIn animate__delay-1s">
        {/* Contact Title */}
        <h1 className="text-4xl font-extrabold text-yellow-300 text-center animate__animated animate__fadeInDown">
          Contact Us
        </h1>

        {/* Get in Touch Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-yellow-200 text-center animate__animated animate__fadeInUp">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-200 text-center animate__animated animate__fadeIn">
            We’d love to hear from you! Whether you have questions, feedback, or just want to say hello, feel free to reach out through any of the methods below.
          </p>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 animate__animated animate__fadeInUp">
            {/* Phone */}
            <a
              href="tel:+91 7045470742"
              className="flex items-center justify-center bg-gray-700 text-yellow-300 hover:text-yellow-500 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_15px_5px_rgba(255,223,88,0.7)] p-4 rounded-lg space-x-4"
            >
              <FaPhoneAlt className="text-2xl animate__animated animate__pulse animate__infinite" />
              <span className="text-lg">+91 7045470742</span>
            </a>

            {/* Email */}
            <a
              href="mailto:sohamkalg@gmail.com"
              className="flex items-center justify-center bg-gray-700 text-yellow-300 hover:text-yellow-500 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_15px_5px_rgba(255,223,88,0.7)] p-4 rounded-lg space-x-4"
            >
              <FaEnvelope className="text-2xl animate__animated animate__pulse animate__infinite" />
              <span className="text-lg">sohamkalg@gmail.com</span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/soham-kalgutkar-0a4b0428a/"
              className="flex items-center justify-center bg-gray-700 text-yellow-300 hover:text-yellow-500 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_15px_5px_rgba(255,223,88,0.7)] p-4 rounded-lg space-x-4"
            >
              <FaLinkedin className="text-2xl animate__animated animate__pulse animate__infinite" />
              <span className="text-lg">LinkedIn</span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/Soham-droid-pixel"
              className="flex items-center justify-center bg-gray-700 text-yellow-300 hover:text-yellow-500 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_15px_5px_rgba(255,223,88,0.7)] p-4 rounded-lg space-x-4"
            >
              <FaGithub className="text-2xl animate__animated animate__pulse animate__infinite" />
              <span className="text-lg">GitHub</span>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
