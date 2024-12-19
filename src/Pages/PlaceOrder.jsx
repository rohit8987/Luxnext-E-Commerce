import { useState } from "react"
import CartTotal from "../Components/CartTotal"
import Title from "../Components/Title"
import { useNavigate } from "react-router-dom";


const PlaceOrder = () => {

  const [method, setMethod] = useState('cod');
  const navigate = useNavigate();

  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t ">
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={'DILIVERY'} text2={'INFORMATION'} />
        </div>
        <div className=" flex gap-3 ">
          <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="First Name" />
          <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="Last Name" />
        </div>
        <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="email" placeholder="Email Address" />
        <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="Street" />
        <div className=" flex gap-3 ">
          <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="City" />
          <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="State" />
        </div>
        <div className=" flex gap-3 ">
          <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="number" placeholder="ZipCode" />
          <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="Country" />
        </div>
        <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="Contact Number" />
      </div>

      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>
        <div className="mt-12">
          <Title text1={'PAYMENT'} text2={'METHOD'} />
          <div className="flex gap-3 flex-col lg:flex-row">
            <div onClick={() => setMethod('upi')} className="flex items-center gap-1 border p-2 cursor-pointer">
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'upi' ? 'bg-green-700' : ''} `}></p>  <div></div>
              <img className="h-5" src="https://cdn.icon-icons.com/icons2/2699/PNG/512/upi_logo_icon_169316.png" alt="" />
            </div>
            <div onClick={() => setMethod('razorpay')} className="flex items-center gap-3 border p-2  cursor-pointer">
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-green-700' : ''} `}></p>
              <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Razorpay_logo.svg" alt="" className="h-5" />
            </div>
            <div onClick={() => setMethod('cod')} className="flex items-center gap-3 border p-2  cursor-pointer">
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-700' : ''} `}></p>
              <p className="uppercase text-gray-500 text-sm font-medium ">cash on delivery</p>
            </div>
          </div>

          <div className="w-full text-end mt-8">
            <button onClick={()=>navigate('/orders')} className="bg-black text-white px-16 py-3 text-sm active:bg-slate-700 uppercase ">place order</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlaceOrder