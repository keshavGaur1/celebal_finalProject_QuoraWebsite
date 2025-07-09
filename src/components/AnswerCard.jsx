const AnswerCard = ({ answer, votedAnswers, onVote }) => {
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

  const userVote = votedAnswers.find((vote) => vote.answerId === answer.id);
  const hasUpvoted = userVote && userVote.voteType === 1;
  const hasDownvoted = userVote && userVote.voteType === -1;

  const handleVote = (voteType) => {
    onVote(answer.id, voteType);
  };

  return (
    <div className="card p-4 sm:p-6">
      <div className="flex flex-col md:flex-row items-start md:space-x-4 space-y-3 md:space-y-0">
        {/* Voting */}
        <div className="flex flex-row md:flex-col items-center space-x-4 md:space-x-0 md:space-y-1 min-w-[40px] mb-2 md:mb-0">
          <button
            onClick={() => handleVote(1)}
            className={`p-1 rounded transition-colors ${
              hasUpvoted
                ? "text-green-600 bg-green-50"
                : "text-gray-400 hover:text-green-600 hover:bg-green-50"
            }`}
            title="Upvote"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          <span
            className={`text-sm font-medium ${
              answer.votes > 0
                ? "text-green-600"
                : answer.votes < 0
                ? "text-red-600"
                : "text-gray-500"
            }`}
          >
            {answer.votes}
          </span>

          <button
            onClick={() => handleVote(-1)}
            className={`p-1 rounded transition-colors ${
              hasDownvoted
                ? "text-red-600 bg-red-50"
                : "text-gray-400 hover:text-red-600 hover:bg-red-50"
            }`}
            title="Downvote"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        {/* Answer Content */}
        <div className="flex-1 min-w-0 w-full">
          <p className="text-gray-800 whitespace-pre-wrap mb-2 sm:mb-4 text-sm sm:text-base">
            {answer.content}
          </p>

          {/* Metadata */}
          <div className="text-sm text-gray-500 border-t pt-3">
            Answered {formatDate(answer.createdAt)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnswerCard;
