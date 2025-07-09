import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { ThemeProvider } from "./contexts/ThemeContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AskQuestion from "./pages/AskQuestion";
import QuestionDetails from "./pages/QuestionDetails";
import {
  initializeSampleData,
  sampleQuestions,
  sampleAnswers,
} from "./utils/sampleData";

function App() {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [votedAnswers, setVotedAnswers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Load data from localStorage on component mount
  useEffect(() => {
    // Initialize sample data if no data exists
    initializeSampleData();

    // Force reload the data after initialization
    const storedQuestions = JSON.parse(
      localStorage.getItem("questions") || "[]"
    );
    const storedAnswers = JSON.parse(localStorage.getItem("answers") || "[]");
    const storedVotedAnswers = JSON.parse(
      localStorage.getItem("votedAnswers") || "[]"
    );

    // If no questions exist, use sample data directly
    if (storedQuestions.length === 0) {
      setQuestions(sampleQuestions);
      setAnswers(sampleAnswers);
      setVotedAnswers([]);

      // Also save to localStorage
      localStorage.setItem("questions", JSON.stringify(sampleQuestions));
      localStorage.setItem("answers", JSON.stringify(sampleAnswers));
      localStorage.setItem("votedAnswers", JSON.stringify([]));
    } else {
      setQuestions(storedQuestions);
      setAnswers(storedAnswers);
      setVotedAnswers(storedVotedAnswers);
    }
  }, []);

  // Save questions to localStorage whenever questions state changes
  useEffect(() => {
    localStorage.setItem("questions", JSON.stringify(questions));
  }, [questions]);

  // Save answers to localStorage whenever answers state changes
  useEffect(() => {
    localStorage.setItem("answers", JSON.stringify(answers));
  }, [answers]);

  // Save voted answers to localStorage whenever votedAnswers state changes
  useEffect(() => {
    localStorage.setItem("votedAnswers", JSON.stringify(votedAnswers));
  }, [votedAnswers]);

  const addQuestion = (question) => {
    const newQuestion = {
      ...question,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
    };
    setQuestions((prev) => [newQuestion, ...prev]);
  };

  const addAnswer = (answer) => {
    const newAnswer = {
      ...answer,
      id: Date.now().toString(),
      votes: 0,
      createdAt: new Date().toISOString(),
    };
    setAnswers((prev) => [...prev, newAnswer]);
  };

  const handleVote = (answerId, voteType) => {
    // Check if user has already voted on this answer
    const existingVote = votedAnswers.find(
      (vote) => vote.answerId === answerId
    );

    if (existingVote) {
      // Remove existing vote
      setVotedAnswers((prev) =>
        prev.filter((vote) => vote.answerId !== answerId)
      );
      setAnswers((prev) =>
        prev.map((answer) => {
          if (answer.id === answerId) {
            return { ...answer, votes: answer.votes - existingVote.voteType };
          }
          return answer;
        })
      );
    } else {
      // Add new vote
      setVotedAnswers((prev) => [...prev, { answerId, voteType }]);
      setAnswers((prev) =>
        prev.map((answer) => {
          if (answer.id === answerId) {
            return { ...answer, votes: answer.votes + voteType };
          }
          return answer;
        })
      );
    }
  };

  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen transition-colors duration-200">
          <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <main className="container mx-auto px-4 py-8">
            <Routes>
              <Route
                path="/"
                element={
                  <Home
                    questions={questions}
                    answers={answers}
                    votedAnswers={votedAnswers}
                    onVote={handleVote}
                    searchQuery={searchQuery}
                  />
                }
              />
              <Route
                path="/ask"
                element={<AskQuestion onAddQuestion={addQuestion} />}
              />
              <Route
                path="/question/:id"
                element={
                  <QuestionDetails
                    questions={questions}
                    answers={answers}
                    votedAnswers={votedAnswers}
                    onAddAnswer={addAnswer}
                    onVote={handleVote}
                  />
                }
              />
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
