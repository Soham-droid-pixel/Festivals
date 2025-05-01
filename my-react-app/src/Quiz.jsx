import React, { useState, useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [loading, setLoading] = useState(true);

  const apiKey = "AIzaSyCdkuzvNnjWVCNUskWAb4pGeUtnpAqGX94";

  const parseQuestions = (text) => {
    const questionBlocks = text.split(/Question:/).filter(block => block.trim());

    return questionBlocks.map((block, index) => {
      try {
        // Clean up the block text
        const cleanBlock = block.trim();
        
        // Extract question text (everything before Options:)
        const questionText = cleanBlock
          .split("Options:")[0]
          .trim();

        // Extract options text
        const optionsText = cleanBlock.split("Options:")[1].split("Answer:")[0];
        
        // Parse options using regex that matches each option line
        const options = [];
        const optionsRegex = /[A-D]\)\s*([^\n]+)/g;
        let match;
        
        while ((match = optionsRegex.exec(optionsText)) !== null) {
          options.push(match[1].trim());
        }

        // Extract answer
        const answerMatch = cleanBlock.match(/Answer:\s*([A-D])/);
        const answer = answerMatch ? answerMatch[1] : "A";

        // Ensure we have exactly 4 options
        if (options.length !== 4) {
          console.error("Invalid number of options parsed:", options);
          return {
            question: questionText || `Question ${index + 1}`,
            options: ["Option A", "Option B", "Option C", "Option D"],
            answer: "A"
          };
        }

        return {
          question: questionText || `Question ${index + 1}`,
          options,
          answer
        };
      } catch (error) {
        console.error("Error parsing question block:", error);
        return {
          question: `Question ${index + 1}`,
          options: ["Option A", "Option B", "Option C", "Option D"],
          answer: "A"
        };
      }
    });
  };

  const fetchQuestions = async () => {
    setLoading(true);

    try {
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      const prompt = `
      Generate 10 quiz questions about Indian festivals. Format each question exactly like this:
      Question: Write the question here
      Options:
      A) First option
      B) Second option
      C) Third option
      D) Fourth option
      Answer: B

      Make sure to follow this exact format with the exact same spacing and punctuation.`;

      const result = await model.generateContent(prompt);
      const text = result.response.text();
      const parsedQuestions = parseQuestions(text);
      setQuestions(parsedQuestions);
    } catch (error) {
      console.error("Error fetching questions:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  const handleAnswer = (option) => {
    if (option === questions[currentQuestion].answer) {
      setScore((prevScore) => prevScore + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setIsFinished(true);
    }
  };

  const resetQuiz = () => {
    setScore(0);
    setCurrentQuestion(0);
    setIsFinished(false);
    fetchQuestions();
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-800 text-white">
        <p className="text-2xl font-bold">Loading quiz...</p>
      </div>
    );
  }

  return (
    <div className="quiz-container bg-gray-900 text-white min-h-screen flex justify-center items-center">
      {!isFinished ? (
        <div className="question-card bg-gray-800 p-6 rounded-lg shadow-lg max-w-lg w-full">
          <h2 className="text-2xl font-bold mb-4">
            Question {currentQuestion + 1} / {questions.length}
          </h2>
          <p className="text-lg mb-6">{questions[currentQuestion]?.question}</p>
          <div className="options flex flex-col space-y-4">
            {questions[currentQuestion]?.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(String.fromCharCode(65 + index))}
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-4 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 ease-in-out text-left"
              >
                {String.fromCharCode(65 + index)}) {option}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="result bg-gray-800 p-6 rounded-lg shadow-lg max-w-lg w-full text-center">
          <h2 className="text-3xl font-bold mb-4">Quiz Finished!</h2>
          <p className="text-lg mb-4">
            Your Score: <span className="font-bold">{score}</span> / {questions.length}
          </p>
          <button
            onClick={resetQuiz}
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-all duration-300 ease-in-out"
          >
            Retry Quiz
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;