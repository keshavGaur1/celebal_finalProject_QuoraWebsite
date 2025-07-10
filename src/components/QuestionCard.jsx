import { useState } from "react";
import { Link } from "react-router-dom";

const QuestionCard = ({
  question,
  answers,
  votedAnswers,
  onVote,
  user,
  onDeleteQuestion,
  onEditQuestion,
}) => {
  const [editing, setEditing] = useState(false);
  const [editData, setEditData] = useState({
    title: question.title,
    description: question.description,
    tags: question.tags ? question.tags.join(", ") : "",
  });

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor((now - date) / (1000 * 60 * 60));
    if (diffInHours < 1) {
      return "Just now";
    } else if (diffInHours < 24) {
      return `${diffInHours} hour${diffInHours !== 1 ? "s" : ""} ago`;
    } else {
      const diffInDays = Math.floor(diffInHours / 24);
      return `${diffInDays} day${diffInDays !== 1 ? "s" : ""} ago`;
    }
  };

  const getTotalVotes = (answerList) => {
    return answerList.reduce((total, answer) => total + answer.votes, 0);
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this question?")) {
      onDeleteQuestion(question.id);
    }
  };

  const handleEdit = () => {
    setEditing(true);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditData((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    onEditQuestion({
      ...question,
      title: editData.title,
      description: editData.description,
      tags: editData.tags
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean),
    });
    setEditing(false);
  };

  if (editing) {
    return (
      <div className="card p-4 sm:p-6">
        <form onSubmit={handleEditSubmit} className="space-y-4">
          <input
            name="title"
            value={editData.title}
            onChange={handleEditChange}
            className="input-field dark:bg-gray-800 dark:text-gray-100"
            required
            minLength={10}
            placeholder="Title"
          />
          <textarea
            name="description"
            value={editData.description}
            onChange={handleEditChange}
            className="input-field dark:bg-gray-800 dark:text-gray-100"
            required
            minLength={20}
            placeholder="Description"
            rows={4}
          />
          <input
            name="tags"
            value={editData.tags}
            onChange={handleEditChange}
            className="input-field dark:bg-gray-800 dark:text-gray-100"
            placeholder="Tags (comma separated)"
          />
          <div className="flex gap-2">
            <button type="submit" className="btn-primary">
              Save
            </button>
            <button
              type="button"
              className="btn-secondary"
              onClick={() => setEditing(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="card hover:shadow-md transition-shadow duration-200 p-4 sm:p-6">
      <div className="flex flex-col md:flex-row items-start md:space-x-4 space-y-3 md:space-y-0">
        {/* Vote count and answer count */}
        <div className="flex flex-row md:flex-col items-center space-x-4 md:space-x-0 md:space-y-2 min-w-[60px] mb-2 md:mb-0">
          <div className="text-center">
            <div className="text-lg font-semibold text-gray-900">
              {getTotalVotes(answers)}
            </div>
            <div className="text-xs text-gray-500">votes</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-semibold text-gray-900">
              {answers.length}
            </div>
            <div className="text-xs text-gray-500">
              answer{answers.length !== 1 ? "s" : ""}
            </div>
          </div>
        </div>

        {/* Question content */}
        <div className="flex-1 min-w-0 w-full">
          <Link to={`/question/${question.id}`} className="block group">
            {/* Image Preview */}
            {question.image && (
              <div className="mb-2">
                <img
                  src={question.image}
                  alt="Question"
                  className="max-h-40 rounded object-contain w-full"
                />
              </div>
            )}
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-1 sm:mb-2 line-clamp-2">
              {question.title}
            </h3>
          </Link>

          <p className="text-gray-600 mb-2 sm:mb-3 text-sm sm:text-base line-clamp-3">
            {question.description}
          </p>

          {/* Tags */}
          {question.tags && question.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-3">
              {question.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Metadata and Edit/Delete Buttons */}
          <div className="flex items-center justify-between text-sm text-gray-500">
            <span>Asked {formatDate(question.createdAt)}</span>
            <div className="flex items-center gap-2">
              <Link
                to={`/question/${question.id}`}
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                View details →
              </Link>
              {user && user.username === question.author && (
                <>
                  <button
                    onClick={handleEdit}
                    className="ml-2 px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition-colors text-xs font-semibold"
                    title="Edit this question"
                  >
                    Edit
                  </button>
                  <button
                    onClick={handleDelete}
                    className="ml-2 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors text-xs font-semibold"
                    title="Delete this question"
                  >
                    Delete
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
