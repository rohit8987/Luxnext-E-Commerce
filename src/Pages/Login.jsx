import { useContext, useState } from "react";
import MyContext from "../Context/MyContext";
import { useNavigate } from "react-router-dom";
import Loader from "../Components/loader/Loader";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FiHelpCircle } from "react-icons/fi";
import toast from "react-hot-toast";
import { signInWithEmailAndPassword } from "firebase/auth/cordova";
import { auth, fireDB } from "../Firebase/Firebaseconfig";
import { collection, onSnapshot, query, where } from "firebase/firestore";



const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  
  const context = useContext(MyContext);
  const { loading, setLoading } = context;

  // navigate 
  const navigate = useNavigate();

  // User Signup State 
  const [userLogin, setUserLogin] = useState({
      email: "",
      password: ""
  });

  
  const userLoginFunction = async () => {
      // validation 
      if (userLogin.email === "" || userLogin.password === "") {
          toast.error("All Fields are required")
      }

      setLoading(true);
      try {
          const users = await signInWithEmailAndPassword(auth, userLogin.email, userLogin.password);
          // console.log(users.user)

          try {
              const q = query(
                  collection(fireDB, "user"),
                  where('uid', '==', users?.user?.uid)
              );
              const data = onSnapshot(q, (QuerySnapshot) => {
                  let user;
                  QuerySnapshot.forEach((doc) => user = doc.data());
                  localStorage.setItem("users", JSON.stringify(user) )
                  setUserLogin({
                      email: "",
                      password: ""
                  })
                  toast.success("Login Successfully");
                  setLoading(false);
                  if(user.role === "user") {
                      navigate('/myprofile');
                  }else{
                      navigate('/admindashboard');
                  }
              });
              return () => data;
          } catch (error) {
              console.log(error);
              setLoading(false);
          }
      } catch (error) {
          console.log(error);
          setLoading(false);
          toast.error("Login Failed");
      }
  }

  return (
    <form
      className="py-5 flex flex-col items-center justify-center px-4 sm:px-6"
    >
      {loading && <Loader />}
      <div className="bg-white rounded-lg border border-gray-300 shadow-lg w-full max-w-md sm:max-w-lg p-8">
        {/* Header */}
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold text-gray-800 uppercase">
            login
          </h2>
        </div>

        {/* Input Fields */}
        <div className="mt-6 flex flex-col gap-6">

          <input
            type="email"
            id="email"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400"
            placeholder="Email"
            value={userLogin.email}
            onChange={(e) => {
              setUserLogin({
                ...userLogin,
                email: e.target.value
              })
            }}
            required
          />
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400"
              placeholder="Password"
              value={userLogin.password}
              onChange={(e) => {
                setUserLogin({
                  ...userLogin,
                  password: e.target.value
                })
              }}
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
            <FiHelpCircle className="ml-2 text-gray-500" />
          </label>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex flex-col gap-4 justify-center items-center">
          <button onClick={userLoginFunction} type="button" className='w-full py-2 font-semibold transition rounded-3xl text-gray-200
             border border-gray-800  hover:bg-gray-900 hover:text-white
              bg-gray-800'
          > Login
          </button>
          <button
            onClick={() => navigate("/signup")}
            className='w-full py-2 font-semibold transition rounded-3xl text-gray-900
             border border-black   hover:bg-gray-900 hover:text-white
              '
          >
            Create Account
          </button>
          <p className="text-gray-500 text-sm mt-4 cursor-pointer hover:text-gray-600 underline">
            Forgot Password?
          </p>
        </div>



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
          <p className="flex w-full justify-center underline text-sm text-gray-500 cursor-pointer hover:text-gray-600">
            Create a Password
          </p>
        </div>
      </div>
    </form>
  );
};

export default Login;
