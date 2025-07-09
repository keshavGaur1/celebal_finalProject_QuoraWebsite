import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import QuestionCard from "../components/QuestionCard";

const Home = ({ questions, answers, votedAnswers, onVote, searchQuery }) => {
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [allTags, setAllTags] = useState([]);

  // Extract all unique tags from questions
  useEffect(() => {
    const tags = new Set();
    questions.forEach((question) => {
      if (question.tags) {
        question.tags.forEach((tag) => tags.add(tag));
      }
    });
    setAllTags(Array.from(tags));
  }, [questions]);

  // Filter and sort questions
  useEffect(() => {
    let filtered = [...questions];
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (question) =>
          question.title.toLowerCase().includes(q) ||
          question.description.toLowerCase().includes(q) ||
          (question.tags &&
            question.tags.some((tag) => tag.toLowerCase().includes(q)))
      );
    }
    // Sort by most recent
    filtered.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    setFilteredQuestions(filtered);
  }, [questions, searchQuery]);

  return (
    <div className="max-w-4xl w-full mx-auto px-2 sm:px-4">
      {/* Header */}
      <div className="mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">
          {searchQuery
            ? `Search results for "${searchQuery}"`
            : "All Questions"}
        </h1>
        <p className="text-gray-600 text-sm sm:text-base">
          {filteredQuestions.length} question
          {filteredQuestions.length !== 1 ? "s" : ""} found
        </p>
      </div>

      {/* Tags Filter */}
      {allTags.length > 0 && (
        <div className="mb-6">
          <h3 className="text-sm font-medium text-gray-700 mb-3">Tags:</h3>
          <div className="flex flex-wrap gap-2">
            {allTags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-sm font-medium bg-gray-200 text-gray-700"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Questions List */}
      <div className="space-y-3 sm:space-y-4">
        {filteredQuestions.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <svg
                className="w-16 h-16 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No questions found
            </h3>
            <p className="text-gray-600 mb-4">
              {searchQuery
                ? "Try adjusting your search keywords."
                : "Be the first to ask a question!"}
            </p>
            {!searchQuery && (
              <Link to="/ask" className="btn-primary">
                Ask a Question
              </Link>
            )}
          </div>
        ) : (
          filteredQuestions.map((question) => (
            <QuestionCard
              key={question.id}
              question={question}
              answers={answers.filter(
                (answer) => answer.questionId === question.id
              )}
              votedAnswers={votedAnswers}
              onVote={onVote}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
