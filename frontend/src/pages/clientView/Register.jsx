import React from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import { motion as Motion } from "framer-motion";
import "react-toastify/dist/ReactToastify.css";
import auth from "../../services/firebaseAuth";

function Register() {
  const navigate = useNavigate();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^a-zA-Z0-9]).{8,}$/;

  const showToast = (message, type = "error") => {
    toast[type](message, {
      position: "top-center",
      autoClose: 4000,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!emailRegex.test(email)) {
      showToast("Please enter a valid email address.");
      return setIsLoading(false);
    }

    if (!passwordRegex.test(password)) {
      showToast(
        "Password must include uppercase, lowercase, number & special character (min 8 characters)."
      );
      return setIsLoading(false);
    }

    if (password !== confirmPassword) {
      showToast("Passwords do not match.");
      return setIsLoading(false);
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        localStorage.setItem("userEmail", email);
        showToast("Registration successful! Redirecting...", "success");
        setTimeout(() => navigate("/client/login"), 2000);
      })
      .catch((error) => {
        const errorMap = {
          "auth/email-already-in-use": "This email is already in use.",
          "auth/weak-password": "Password is too weak.",
          "auth/invalid-email": "Email address is invalid.",
        };
        showToast(
          errorMap[error.code] || "Registration failed. Please try again."
        );
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <>
      <ToastContainer />
      <div className="min-h-screen flex items-center justify-center bg-[url('/bg.jpg')] bg-cover bg-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <Motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full max-w-sm sm:max-w-md md:max-w-lg bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden"
        >
          <Motion.div
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4 }}
            className="bg-gradient-to-r from-green-600 to-green-700 p-4 sm:p-6 text-center"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Create Account</h2>
            <p className="text-green-100 text-sm sm:text-base mt-1">Join us to get started</p>
          </Motion.div>

          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-4 sm:space-y-6">
            {/* Email */}
            <Motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <label
                htmlFor="email"
                className="block text-xs sm:text-sm font-medium text-gray-700 mb-1"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 text-sm sm:text-base"
                placeholder="your@email.com"
                required
              />
            </Motion.div>

            {/* Password */}
            <Motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <label
                htmlFor="password"
                className="block text-xs sm:text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 text-sm sm:text-base"
                placeholder="••••••••"
                required
              />
              <p className="text-xs text-gray-500 mt-1">
                Must include: uppercase, lowercase, number, special character
              </p>
            </Motion.div>

            {/* Confirm Password */}
            <Motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <label
                htmlFor="confirmPassword"
                className="block text-xs sm:text-sm font-medium text-gray-700 mb-1"
              >
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 text-sm sm:text-base"
                placeholder="••••••••"
                required
              />
            </Motion.div>

            {/* Submit Button */}
            <Motion.button
              whileTap={{ scale: 0.97 }}
              whileHover={{ scale: 1.01 }}
              type="submit"
              disabled={isLoading}
              className={`w-full py-2 sm:py-3 rounded-lg sm:rounded-xl font-medium sm:font-semibold text-white transition duration-200 ${
                isLoading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-green-600 hover:bg-green-700 focus:ring-2 focus:ring-green-500 cursor-pointer"
              }`}
            >
              {isLoading ? (
                <span className="flex items-center justify-center text-sm sm:text-base">
                  <svg
                    className="animate-spin h-4 w-4 sm:h-5 sm:w-5 mr-2 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.37 0 0 5.37 0 12h4z"
                    />
                  </svg>
                  Registering...
                </span>
              ) : (
                "Register Now"
              )}
            </Motion.button>

            {/* Redirect to Login */}
            <Motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-center text-xs sm:text-sm text-gray-600"
            >
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => navigate("/client/login")}
                className="text-green-600 font-medium hover:underline"
              >
                Sign in here
              </button>
            </Motion.div>
          </form>

          <Motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xs text-center text-gray-400 mb-4 sm:mb-6 px-4 sm:px-6"
          >
            By registering, you agree to our{" "}
            <span className="underline">Terms of Service</span> and{" "}
            <span className="underline">Privacy Policy</span>.
          </Motion.p>
        </Motion.div>
      </div>
    </>
  );
}

export default Register;