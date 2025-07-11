import React from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../services/firebaseAuth";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  React.useEffect(() => {
    const savedEmail = localStorage.getItem("userEmail");
    if (savedEmail) {
      setEmail(savedEmail); 
    }
  }, []);

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
    if (email === "" || password === "") {
      alert("Please fill in all fields.");
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then(async () => {
        localStorage.setItem("userEmail", email);
        navigate("/client/register");
      })
      .catch((error) => {
        let errorMessage = "An error occurred. Please try again.";
        if (error.code === "auth/user-not-found") {
          errorMessage = "No user found with this email.";
        } else if (error.code === "auth/wrong-password") {
          errorMessage = "Incorrect password. Please try again.";
        } else if (error.code === "auth/invalid-credential") {
          errorMessage = "Incorrect email/password. Please try again.";
        }
        alert(errorMessage);
      })
      .finally(() => {});
  }
  return (
    <div>
      <div className="min-h-screen bg-[url('/bg.jpg')] bg-cover bg-center flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
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
            <button
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-300"
              onClick={handleSubmit}
            >
              Login
            </button>
             <label>Don't have an account ? </label>
            <label onClick={() => navigate("/client/register")}>Register Here</label>
            
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
