import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Collection from "./Pages/Collection"
import Contact from "./Pages/Contact"
import About from "./Pages/About"
import Product from "./Pages/Product"
import Cart from "./Pages/Cart"
import Login from "./Pages/Login"
import Signup from "./Pages/SignUp"
import PlaceOrder from "./Pages/PlaceOrder"
import Orders from "./Pages/Orders"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import SearchBar from "./Components/SearchBar"
import { ToastContainer,  } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MyProfile from "./Pages/MyProfile"
import ScrollTop from "./Pages/ScrollTop"
import AdminDashboard from "./Components/Admin/AdminDashboard"
import AddProductPage from "./Components/Admin/AddProductPage"
import UpdateProductPage from "./Components/Admin/UpdateProductPage"
import MyState from "./Context/MyState"
import { Toaster } from "react-hot-toast"
import { ProtectedRouteForUser } from "./protectedRoute/ProtectedRouteForUser"
import { ProtectedRouteForAdmin } from "./protectedRoute/ProtectedRouteForAdmin"






const App = () => {
  return (
    <div className='px-4 sm:px[5vw] md:px[7vw] lg:px-[9vw]'>
      <MyState>
     <ToastContainer/>
     <Navbar/>
     <SearchBar/>
     <ScrollTop/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/collection" element={<Collection/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/product/:id" element={<Product/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/place-order" element={<PlaceOrder/>}/>
      <Route path="/orders" element={<Orders/>}/>
      <Route path="/myprofile" element={
        <ProtectedRouteForUser>
          <MyProfile/>
        </ProtectedRouteForUser>
      }/>
      <Route path="/admindashboard" element={
        <ProtectedRouteForAdmin>
          <AdminDashboard/>
        </ProtectedRouteForAdmin>
      }/>
      <Route path="/addproduct" element = {
        <ProtectedRouteForAdmin>
          <AddProductPage/>
        </ProtectedRouteForAdmin>
      }/>
      <Route path="/updateproduct/:id" element = {
        <ProtectedRouteForAdmin>
          <UpdateProductPage/>
        </ProtectedRouteForAdmin>
      }/>
    </Routes>
    <Toaster/>
    <Footer/>
    </MyState>
    </div>
  )
}

export default App
