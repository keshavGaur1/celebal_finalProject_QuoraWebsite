import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AnswerCard from "../components/AnswerCard";

const QuestionDetails = ({
  questions,
  answers,
  votedAnswers,
  onAddAnswer,
  onVote,
}) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [newAnswer, setNewAnswer] = useState("");
  const [showAnswerForm, setShowAnswerForm] = useState(false);

  const question = questions.find((q) => q.id === id);
  const questionAnswers = answers
    .filter((answer) => answer.questionId === id)
    .sort((a, b) => b.votes - a.votes); // Sort by votes (highest first)

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const handleSubmitAnswer = (e) => {
    e.preventDefault();
    if (newAnswer.trim().length >= 10) {
      onAddAnswer({
        questionId: id,
        content: newAnswer.trim(),
      });
      setNewAnswer("");
      setShowAnswerForm(false);
    }
  };

  if (!question) {
    return (
      <div className="max-w-4xl mx-auto text-center py-12">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Question not found
        </h1>
        <p className="text-gray-600 mb-6">
          The question you're looking for doesn't exist.
        </p>
        <button onClick={() => navigate("/")} className="btn-primary">
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl w-full mx-auto px-2 sm:px-4">
      {/* Question */}
      <div className="card mb-6 sm:mb-8 p-4 sm:p-6">
        <div className="mb-4 sm:mb-6">
          {/* Image Preview */}
          {question.image && (
            <div className="mb-3 sm:mb-4">
              <img
                src={question.image}
                alt="Question"
                className="max-h-80 rounded object-contain w-full"
              />
            </div>
          )}
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-4">
            {question.title}
          </h1>
          <p className="text-gray-600 whitespace-pre-wrap text-sm sm:text-base">
            {question.description}
          </p>
        </div>

        {/* Tags */}
        {question.tags && question.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {question.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Metadata */}
        <div className="text-sm text-gray-500 border-t pt-4">
          Asked on {formatDate(question.createdAt)}
        </div>
      </div>

      {/* Answers Section */}
      <div className="mb-6 sm:mb-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-6 gap-2 sm:gap-0">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
            {questionAnswers.length} Answer
            {questionAnswers.length !== 1 ? "s" : ""}
          </h2>
          <button
            onClick={() => setShowAnswerForm(!showAnswerForm)}
            className="btn-primary"
          >
            {showAnswerForm ? "Cancel" : "Write an Answer"}
          </button>
        </div>

        {/* Answer Form */}
        {showAnswerForm && (
          <div className="card mb-6 p-4 sm:p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Your Answer
            </h3>
            <form onSubmit={handleSubmitAnswer}>
              <textarea
                value={newAnswer}
                onChange={(e) => setNewAnswer(e.target.value)}
                rows={6}
                placeholder="Write your answer here... (minimum 10 characters)"
                className="input-field resize-none mb-4"
                required
                minLength={10}
              />
              <div className="flex items-center justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setShowAnswerForm(false)}
                  className="btn-secondary"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={newAnswer.trim().length < 10}
                  className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Post Answer
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Answers List */}
        <div className="space-y-6">
          {questionAnswers.length === 0 ? (
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
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No answers yet
              </h3>
              <p className="text-gray-600 mb-4">
                Be the first to answer this question!
              </p>
              <button
                onClick={() => setShowAnswerForm(true)}
                className="btn-primary"
              >
                Write an Answer
              </button>
            </div>
          ) : (
            questionAnswers.map((answer) => (
              <AnswerCard
                key={answer.id}
                answer={answer}
                votedAnswers={votedAnswers}
                onVote={onVote}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default QuestionDetails;
