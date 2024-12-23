import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { useNavigate } from "react-router-dom";
import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [currentState, setCurrentState] = useState("Login");
  const navigate = useNavigate();

  const onSubmitHandler = async (event) => {
    event.preventDefault();
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="py-5 flex flex-col items-center justify-center px-4 sm:px-6"
    >
      <div className="flex justify-start items-center w-10 p-2 mb-4">
        <KeyboardBackspaceOutlinedIcon
          onClick={() => navigate("/")}
          className="text-gray-800 text-xl sm:text-2xl cursor-pointer sm:ml-[-230px] ml-[-150px] md:ml-[-230px]"
        />
      </div>

      <div className="bg-white rounded-lg border border-gray-300 shadow-lg w-full max-w-md sm:max-w-lg p-8">
        {/* Header */}
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold text-gray-800 uppercase">
            {currentState}
          </h2>
        </div>

        {/* Input Fields */}
        <div className="mt-6 flex flex-col gap-6">
          {currentState === "Sign Up" && (
            <input
              type="text"
              id="name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400"
              placeholder="Name"
              required
            />
          )}
          <input
            type="email"
            id="email"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400"
            placeholder="Email"
            required
          />
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400"
              placeholder="Password"
              required
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-3 cursor-pointer text-xl text-gray-500"
            >
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </div>
        </div>

        {/* Remember Me */}
        <div className="flex items-center gap-2 mt-4">
          <input
            type="checkbox"
            id="remember"
            className="w-4 h-4 border-gray-300 rounded cursor-pointer"
          />
          <label
            htmlFor="remember"
            className="text-sm text-gray-600 flex items-center"
          >
            Keep Me Signed In
            <HelpOutlineIcon className="ml-2 text-gray-500" />
          </label>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex flex-col gap-4">
          <button
            className={`w-full py-3 rounded-lg font-semibold transition ${currentState === "Sign Up"
              ? "border border-gray-800 text-gray-900 hover:bg-gray-900 hover:text-white"
              : "bg-gray-800 text-white hover:bg-gray-700"
              }`}
          >
            {currentState === "Login" ? "Login" : "Continue"}
          </button>
          <button
            onClick={() =>
              setCurrentState(currentState === "Login" ? "Sign Up" : "Login")
            }
            type="button"
            className={`w-full py-3 rounded-lg font-semibold transition ${currentState === "Login"
              ? "border border-gray-800 text-gray-900 hover:bg-gray-900 hover:text-white"
              : "bg-gray-800 text-white hover:bg-gray-700"
              }`}
          >
            {currentState === "Login" ? "Create Account" : "Login"}
          </button>
        </div>

        {/* Forgot Password */}
        <p className="mt-4 text-sm text-gray-500 text-center cursor-pointer hover:underline hover:text-gray-600">
          Forgot Password?
        </p>

        {/* Separator */}
        <div className="flex items-center mt-6 gap-4">
          <div className="h-px bg-gray-300 flex-grow"></div>
          <span className="text-sm text-gray-500">or</span>
          <div className="h-px bg-gray-300 flex-grow"></div>
        </div>

        {/* Extra Options */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600 font-semibold">
            Signed up for Luxnest Rewards?
          </p>
          <p className="text-sm text-gray-500 underline cursor-pointer hover:text-gray-600">
            Create a Password
          </p>
        </div>
      </div>
    </form>
  );
};

export default Login;
