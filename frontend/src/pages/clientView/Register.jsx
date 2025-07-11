import React from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../services/firebaseAuth";

function Register() {
  const navigate = useNavigate();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^[A-Z][a-z]*[0-9]+.*[@$!%*?#&].*$/;

  function handleSubmit(e) {
    e.preventDefault();
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    if (password.length < 8) {
        alert("Password must be at least 8 characters long.");
        return;
    }
    if (!passwordRegex.test(password)) {
      alert(
        "Password must start with an uppercase letter, contain at least one number, and one special character."
      );
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("User registered successfully:", user);
        localStorage.setItem("userEmail", email);

        navigate("/client/login");
      })
      .catch((error) => {
        let errorMessage = "Registration failed. Please try again.";

        if (error.code === "auth/email-already-in-use") {
          errorMessage = "This email is already in use.";
        } else if (error.code === "auth/weak-password") {
          errorMessage = "Password is too weak.";
        } else if (error.code === "auth/invalid-email") {
          errorMessage = "Email address is invalid.";
        }

        alert(errorMessage);
        console.error("Error during registration:", error.code, error.message);
      })
      .finally(() => {
        // any cleanup if needed
      });
  }

  return (
    <div>
      <div className="min-h-screen bg-[url('/bg.jpg')] bg-cover bg-center flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <button
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-300"
              onClick={handleSubmit}
            >
              Register
            </button>
            <label>Already have an account ? </label>
            <label onClick={() => navigate("/client/login")}>Login Here</label>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
