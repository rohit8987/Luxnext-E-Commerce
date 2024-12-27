import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { ShopContext } from './ShopContext';

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false); // For PersonIcon dropdown
  const [visible, setVisible] = useState(false); // For mobile menu toggle
  const { setShowSearch, getCartCount } = useContext(ShopContext);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuVisible((prev) => !prev);
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
          {/* Home has a fixed route */}
          <NavLink to="/" className="flex flex-col items-center gap-1">
            <p className="uppercase">Home</p>
            <hr
              className={`w-2/4 border-none h-[1.5px] bg-gray-700 ${
                location.pathname === '/' ? '' : 'hidden'
              }`}
            />
          </NavLink>

          {/* Dynamic navigation links */}
          {['Collection', 'About', 'Contact'].map((item) => (
            <NavLink
              key={item}
              to={`/${item.toLowerCase()}`}
              className="flex flex-col items-center gap-1"
            >
              <p className="uppercase">{item}</p>
              <hr
                className={`w-2/4 border-none h-[1.5px] bg-gray-700 ${
                  location.pathname === `/${item.toLowerCase()}` ? '' : 'hidden'
                }`}
              />
            </NavLink>
          ))}
        </ul>

        {/* Icons and Mobile Menu */}
        <div className="flex items-center gap-6">
          {/* Search Icon */}
          <div onClick={() => setShowSearch(true)} className="w-5 cursor-pointer">
            <SearchIcon />
          </div>

          {/* Person Icon with Dropdown */}
          <div className="relative inline-block">
            <PersonIcon
              className="w-8 h-8 cursor-pointer text-gray-700"
              onClick={toggleMenu}
            />
            {menuVisible && (
              <div className="absolute right-0 w-36 bg-slate-100 text-gray-700 rounded shadow-lg z-10">
                <div className="flex flex-col gap-2 py-3 px-5">
                  {['My Profile', 'Orders', 'Admin', 'Login', 'Logout'].map((item) => (
                    <p
                      key={item}
                      onClick={() => {
                        navigate(`/${item.toLowerCase().replace(' ', '')}`);
                        setMenuVisible(false);
                      }}
                      className="cursor-pointer hover:text-black"
                    >
                      {item}
                    </p>
                  ))}
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
          className={`fixed top-0 right-0 bottom-0 overflow-hidden bg-white transition-all duration-300 ease-in-out ${
            visible ? 'w-2/3 sm:w-1/3 shadow-lg' : 'w-0'
          }`}
        >
          <div className="flex flex-col text-gray-600">
            <div
              onClick={() => setVisible(false)}
              className="flex items-center gap-4 p-3 cursor-pointer"
            >
              <div className="h-4 rotate-180 flex items-center">
                <ArrowBackIosIcon sx={{ fontSize: 20 }} />
              </div>
              <p>Back</p>
            </div>
            <NavLink
              onClick={() => setVisible(false)}
              to="/"
              className="uppercase py-2 pl-6 hover:bg-gray-100 hover:text-gray-800"
            >
              Home
            </NavLink>
            {['Collection', 'About', 'My Profile', 'Cart', 'Contact', 'Orders', 'Login', 'AdminDashboard', 'Logout'].map(
              (item) => (
                <NavLink
                  key={item}
                  onClick={() => setVisible(false)}
                  to={`/${item.toLowerCase().replace(' ', '')}`}
                  className="uppercase py-2 pl-6 hover:bg-gray-100 hover:text-gray-800"
                >
                  {item}
                </NavLink>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
