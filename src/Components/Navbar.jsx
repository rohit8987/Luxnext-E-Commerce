import { Link, NavLink, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { ShopContext } from "./ShopContext";

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false); // For PersonIcon dropdown
  const [visible, setVisible] = useState(false); // For mobile menu toggle
  const { setShowSearch, getCartCount } = useContext(ShopContext);
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("users"));

  const toggleMenu = () => {
    setMenuVisible((prev) => !prev);
  };

  // Function to handle outside clicks
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown-menu") && !event.target.closest(".person-icon")) {
        setMenuVisible(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const logout = () => {
    localStorage.clear("users");
    navigate("/login");
  };

  return (
    <>
      <div className="flex h-24 items-center justify-between py-5 font-medium sticky top-0 z-10 bg-white">
        {/* Logo */}
        <Link to="/">
          <h1 className="w-36 text-2xl">LUXNEST.</h1>
        </Link>

        {/* Navigation Links */}
        <ul className="hidden sm:flex gap-5 text-sm md:text-xl text-gray-700 hover:text-gray-900">
          <NavLink to="/" className="flex flex-col items-center gap-1">
            <p className="uppercase">Home</p>
          </NavLink>
          <NavLink to="/collection" className="flex flex-col items-center gap-1">
            <p className="uppercase">Collection</p>
          </NavLink>
          <NavLink to="/about" className="flex flex-col items-center gap-1">
            <p className="uppercase">About</p>
          </NavLink>
          <NavLink to="/contact" className="flex flex-col items-center gap-1">
            <p className="uppercase">Contact</p>
          </NavLink>
        </ul>

        {/* Icons and Mobile Menu */}
        <div className="flex items-center gap-6">
          {/* Search Icon */}
          <div onClick={() => setShowSearch(true)} className="w-5 cursor-pointer">
            <SearchIcon />
          </div>

          {/* Person Icon with Dropdown */}
          <div className="relative inline-block person-icon">
            <PersonIcon
              className="w-8 h-8 cursor-pointer text-gray-700"
              onClick={toggleMenu}
            />
            {menuVisible && (
              <div className="absolute right-0 w-36 bg-white text-gray-700 rounded shadow-lg z-10 dropdown-menu">
                <div className="flex flex-col gap-2 py-3 px-5">
                  {/* User Role: User */}
                  {user?.role === "user" && (
                    <div className="hover:text-black cursor-pointer">
                      <Link onClick={() => setMenuVisible(false)} to={"/myprofile"}>
                        {user?.name}
                      </Link>
                    </div>
                  )}

                  {/* User Role: Admin */}
                  {user?.role === "admin" && (
                    <div className="hover:text-black cursor-pointer">
                      <Link onClick={() => setMenuVisible(false)} to="/admindashboard">
                      {user?.name}
                      </Link>
                    </div>
                  )}

                  {/* Orders Link */}
                  <div className="hover:text-black cursor-pointer">
                    <Link onClick={() => setMenuVisible(false)} to="/orders">
                      Orders
                    </Link>
                  </div>

                  {/* Signup and Login for Guests */}
                  {!user && (
                    <>
                      <div className="hover:text-black cursor-pointer">
                        <Link onClick={() => setMenuVisible(false)} to="/signup">
                          Signup
                        </Link>
                      </div>
                      <div className="hover:text-black cursor-pointer">
                        <Link onClick={() => setMenuVisible(false)} to="/login">
                          Login
                        </Link>
                      </div>
                    </>
                  )}

                  {/* Logout for Logged-in Users */}
                  {user && (
                    <div
                      className="hover:text-black cursor-pointer"
                      onClick={() => {
                        logout();
                        setMenuVisible(false);
                      }}
                    >
                      Logout
                    </div>
                  )}
                </div>
              </div>

            )}
          </div>

          {/* Shopping Cart Icon */}
          <Link to="/cart" className="relative">
            <div className="w-5 min-w-5">
              <ShoppingBagOutlinedIcon />
            </div>
            <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
              {getCartCount()}
            </p>
          </Link>

          {/* Hamburger Menu for Mobile */}
          <div onClick={() => setVisible(true)} className="w-5 cursor-pointer sm:hidden">
            <MenuOutlinedIcon />
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 bottom-0 overflow-hidden bg-white transition-all duration-300 ease-in-out ${visible ? "w-2/3 sm:w-1/3 shadow-lg" : "w-0"
            }`}
        >
          <div className="flex flex-col text-gray-600">
            <div
              onClick={() => setVisible(false)}
              className="flex items-center gap-4 p-3 "
            >
              <div className="h-4 rotate-180 flex items-center">
                <ArrowBackIosIcon sx={{ fontSize: 20 }} />
              </div>
              <p>Back</p>
            </div>
            <NavLink to="/" onClick={() => setVisible(false)} className="uppercase py-2 pl-6 hover:bg-gray-100 hover:text-gray-800 ">
              <p className="uppercase">Home</p>
            </NavLink>
              <NavLink to="/collection" onClick={() => setVisible(false)} className="uppercase py-2 pl-6 hover:bg-gray-100 hover:text-gray-800">
                <p className="uppercase">Collection</p>
              </NavLink>
              <NavLink to="/about" onClick={() => setVisible(false)} className="uppercase py-2 pl-6 hover:bg-gray-100 hover:text-gray-800">
                <p className="uppercase">About</p>
              </NavLink>
              <NavLink to="/contact" onClick={() => setVisible(false)} className="uppercase py-2 pl-6 hover:bg-gray-100 hover:text-gray-800">
                <p className="uppercase">Contact</p>
              </NavLink>
            <div className="">
              <div className="flex flex-col text-gray-600 ">
                {/* User Role: User */}
                {user?.role === "user" && (
                   <NavLink to="/myprofile" onClick={() => setVisible(false)} className="uppercase py-2 pl-6 hover:bg-gray-100 hover:text-gray-800 ">
                   <p className="uppercase">{user?.name}</p>
                 </NavLink>
                  )}

                {/* User Role: Admin */}
                {user?.role === "admin" && (
                  <NavLink to="/admindashboard" onClick={() => setVisible(false)} className="uppercase py-2 pl-6 hover:bg-gray-100 hover:text-gray-800 ">
                  <p className="uppercase">{user?.name}</p>
                </NavLink>
                )}

                {/* Orders Link */}
                <NavLink to="/orders" onClick={() => setVisible(false)} className="uppercase py-2 pl-6 hover:bg-gray-100 hover:text-gray-800 ">
                  <p className="uppercase">orders</p>
                </NavLink>

                {/* Signup and Login for Guests */}
                {!user && (
                  <>
                    <NavLink to="/signup" onClick={() => setVisible(false)} className="uppercase py-2 pl-6 hover:bg-gray-100 hover:text-gray-800 ">
                  <p className="uppercase">signup</p>
                </NavLink>
                <NavLink to="/login" onClick={() => setVisible(false)} className="uppercase py-2 pl-6 hover:bg-gray-100 hover:text-gray-800 ">
                  <p className="uppercase">login</p>
                </NavLink>
                  </>
                )}

                {/* Logout for Logged-in Users */}
                {user && (
                  <div
                    className="uppercase py-2 pl-6 hover:bg-gray-100 hover:text-gray-800"
                    onClick={() => {
                      logout();
                      setMenuVisible(false);
                    }}
                  >
                    Logout
                  </div>
                )}
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
