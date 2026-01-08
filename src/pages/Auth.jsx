import React, { useState } from "react";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
      }
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-indigo-600 via-purple-600 to-pink-500">
        <div className="perspective">
        <div
        className={`flip-card relative w-96 h-96 ${
            !isLogin ? "flipped" : ""
        }`}
        >
            <div className="flip-face bg-white rounded-xl shadow-2xl p-8 absolute w-full">
            <h2 className="text-2xl font-bold text-center mb-2">
                Welcome Back 👋
            </h2>
            <p className="text-sm text-gray-500 text-center mb-6">
                Login to manage your tasks
            </p>

            {error && (
                <p className="text-red-500 text-sm text-center mb-3">
                {error}
                </p>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                type="email"
                placeholder="Email"
                className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
                onChange={(e) => setEmail(e.target.value)}
                required
                />

                <input
                type="password"
                placeholder="Password"
                className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
                onChange={(e) => setPassword(e.target.value)}
                required
                />

                <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
                >
                Login
                </button>
            </form>

            <p className="text-sm text-center mt-4">
                Don’t have an account?
                <button
                onClick={() => setIsLogin(false)}
                className="text-indigo-600 ml-1 font-medium hover:underline"
                >
                Sign up
                </button>
            </p>
            </div>

            <div className="flip-face flip-back bg-white rounded-xl shadow-2xl p-8 absolute w-full">
            <h2 className="text-2xl font-bold text-center mb-2">
                Create Account 🚀
            </h2>
            <p className="text-sm text-gray-500 text-center mb-6">
                Sign up to start managing tasks
            </p>

            {error && (
                <p className="text-red-500 text-sm text-center mb-3">
                {error}
                </p>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                type="email"
                placeholder="Email"
                className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-pink-500 outline-none"
                onChange={(e) => setEmail(e.target.value)}
                required
                />

                <input
                type="password"
                placeholder="Password"
                className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-pink-500 outline-none"
                onChange={(e) => setPassword(e.target.value)}
                required
                />

                <button
                type="submit"
                className="w-full bg-pink-600 text-white py-2 rounded hover:bg-pink-700 transition"
                >
                Sign Up
                </button>
            </form>

            <p className="text-sm text-center mt-4">
                Already have an account?
                <button
                onClick={() => setIsLogin(true)}
                className="text-pink-600 ml-1 font-medium hover:underline"
                >
                Login
                </button>
            </p>
            </div>
        </div>
        </div>
    </div>
    );
};

export default Auth;
