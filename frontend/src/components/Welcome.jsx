import React from "react";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/client/home");
  };

  return (
    <div className="min-h-screen bg-[url('/bg.jpg')] bg-cover bg-center flex items-center justify-center">
      <button
        onClick={handleNavigate}
        className="px-6 py-3 text-white text-lg font-semibold bg-blue-600 hover:bg-blue-700 rounded-xl shadow-lg transition duration-300"
      >
        LOGIN
      </button>
    </div>
  );
};

export default Welcome;
