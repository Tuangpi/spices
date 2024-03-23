import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { doSignInWithEmailAndPassword } from "../../firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    doSignInWithEmailAndPassword(email, password)
      .then((res) => {
        setLoading(false);
        navigate("/admin/dashboard");
      })
      .catch((err) => setLoading(false));
  };

  return (
    <div className="flex flex-col items-center mt-14 h-screen font-Montserrat">
      <div className="text-2xl font-semibold mb-8">Spice of Myanmar</div>
      <form
        onSubmit={handleLogin}
        className="flex flex-col gap-4 w-11/12 sm:w-1/2 md:w-1/3 lg:w-1/4"
      >
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-gray-300 rounded px-3 py-2 w-full md:text-sm"
          required
        />
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 w-full md:text-sm"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-0 flex items-center px-3 focus:outline-none"
          >
            {showPassword ? (
              <FontAwesomeIcon icon={faEye} />
            ) : (
              <FontAwesomeIcon icon={faEyeSlash} />
            )}
          </button>
        </div>
        <button
          type={`${loading ? "button" : "submit"}`}
          className={`${
            loading ? "animate-pulse" : ""
          } bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600`}
        >
          {loading ? "Authenticating..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;
