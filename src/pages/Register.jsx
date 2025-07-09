import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useUser } from "../contexts/UserContext";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { register } = useUser();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (register(username, password)) {
      navigate("/");
    } else {
      setError("Username already exists");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="relative z-10 w-full max-w-md">
        <div className="bg-white/90 dark:bg-gray-800/90 p-10 rounded-3xl shadow-2xl backdrop-blur-md animate-fadeInUp">
          <h2 className="text-3xl font-extrabold mb-6 text-center text-pink-700 dark:text-pink-300 drop-shadow-lg">
            Create Account
          </h2>
          {error && (
            <div className="text-red-500 mb-4 text-center animate-shake">
              {error}
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 dark:focus:ring-pink-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-300 shadow-sm hover:shadow-lg"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 dark:focus:ring-pink-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-300 shadow-sm hover:shadow-lg"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-600 via-blue-600 to-purple-600 text-white py-3 rounded-lg font-bold text-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300 animate-bounceIn"
            >
              Register
            </button>
          </form>
          <p className="mt-6 text-center text-sm text-gray-700 dark:text-gray-300">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-pink-600 hover:underline font-semibold"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
      <style>{`
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(40px);} to { opacity: 1; transform: translateY(0);} }
        .animate-fadeInUp { animation: fadeInUp 1s cubic-bezier(.23,1.01,.32,1) both; }
        @keyframes bounceIn { 0%{transform:scale(.9);} 60%{transform:scale(1.05);} 100%{transform:scale(1);} }
        .animate-bounceIn { animation: bounceIn 0.7s cubic-bezier(.23,1.01,.32,1) both; }
        @keyframes shake { 10%, 90% { transform: translateX(-2px); } 20%, 80% { transform: translateX(4px); } 30%, 50%, 70% { transform: translateX(-8px); } 40%, 60% { transform: translateX(8px); } }
        .animate-shake { animation: shake 0.5s; }
      `}</style>
    </div>
  );
}
