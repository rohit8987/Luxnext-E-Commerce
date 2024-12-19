
import { Link, NavLink, useNavigate } from 'react-router-dom'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import { useContext, useState } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { ShopContext } from './ShopContext';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';



const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const {setShowSearch, getCartCount}=useContext(ShopContext);
  const navigate = useNavigate();
  return (
    <>
      <div className="flex h-24 items-center justify-between py-5 font-medium sticky top-0 z-10 bg-white">
        <Link to="/">
        <h1 className='w-36 text-2xl'>LUXNEST.</h1>
        </Link>
        

        <ul className="hidden sm:flex gap-5 text-sm md:text-xl text-gray-700  hover:text-gray-900">
          <NavLink to="/" className="flex flex-col items-center gap-1">
            <p className='uppercase'>Home</p>
            <hr className={`w-2/4 border-none h-[1.5px] bg-gray-700 ${location.pathname === "" ? "" : "hidden"
              }`} />
          </NavLink>
          <NavLink to="/collection" className="flex flex-col items-center gap-1">
            <p className='uppercase'>Collection</p>
            <hr className={`w-2/4 border-none h-[1.5px] bg-gray-700 ${location.pathname === "" ? "" : "hidden"
              }`} />
          </NavLink>
          <NavLink to="/about" className="flex flex-col items-center gap-1">
            <p className='uppercase'>About</p>
            <hr className={`w-2/4 border-none h-[1.5px] bg-gray-700 ${location.pathname === "" ? "" : "hidden"
              }`} />
          </NavLink>
          <NavLink to="/contact" className="flex flex-col items-center gap-1">
            <p className='uppercase'>Contact</p>
            <hr className={`w-2/4 border-none h-[1.5px] bg-gray-700 ${location.pathname === "/contact" ? "" : "hidden"
              }`} />
          </NavLink>
        </ul>

        <div className="flex items-center gap-6">
          <div onClick={()=>setShowSearch(true)} className='w-5 cursor-pointer '>
          <SearchIcon  />
          </div>
         
          <div className="group relative inline-block">
            <PersonIcon onClick={()=>navigate('/login')} className="w-8 h-8 cursor-pointer text-gray-700" />
            <div className="hidden group-hover:block absolute right-0 w-36 bg-slate-100 text-gray-700 rounded shadow-lg z-10">
              <div className="flex flex-col gap-2 py-3 px-5">
                <p className="cursor-pointer hover:text-black">My Profile</p>
                <p className="cursor-pointer hover:text-black">Order</p>
                <p className="cursor-pointer hover:text-black">Logout</p>
              </div>
            </div>
          </div>
          <Link to='/cart' className='relative'>
            <div className='w-5 min-w-5'>
              <ShoppingBagOutlinedIcon />
            </div>
            <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">{getCartCount()}</p>
          </Link>
          <div onClick={() => setVisible(true)} className='w-5 cursor-pointer sm:hidden'>
            <MenuOutlinedIcon />
          </div>
        </div>
        <div className={`fixed top-0 right-0 bottom-0 overflow-hidden bg-white transition-all duration-300 ease-in-out  ${visible ? 'w-2/3 sm:1/3 shadow-lg' : 'w-0'} overflow-hidden`}>
          <div className="flex flex-col text-gray-600">
            <div onClick={() => setVisible(false)} className="flex items-center gap-4 p-3 cursor-pointer">
              <div className="h-4 rotate-180 flex items-center">
                <ArrowBackIosIcon  sx={{ fontSize: 20 }} />
              </div>
              <p className="">Back</p>
            </div>
            <NavLink onClick={()=>setVisible(false)} to="/" className="uppercase py-2 pl-6">home</NavLink>
            <NavLink onClick={()=>setVisible(false)} to="/collection" className="uppercase py-2 pl-6">collection</NavLink>
            <NavLink onClick={()=>setVisible(false)} to="/about" className="uppercase py-2 pl-6">about</NavLink>
            <NavLink onClick={()=>setVisible(false)} to="/contact" className="uppercase py-2 pl-6">contact</NavLink>
          </div>
        </div>
      </div >
    </>
  )
}

export default Navbar