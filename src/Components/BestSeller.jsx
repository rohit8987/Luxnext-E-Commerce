import { useContext, useEffect, useState } from "react"
import { ShopContext } from "./ShopContext"
import Title from "./Title"
import ProductItems from "./ProductItems"
import MyContext from "../Context/MyContext"
import { Link } from "react-router-dom"


const BestSeller = () => {

  
    const context = useContext(MyContext);
    const { loading, getAllProduct } = context;
  
    return (
      <div className="my-10">
        <div className="text-center py-8 text-3xl">
          <Title text1={"BEST"} text2={"SELLER"} />
          <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            quis dignissimos consequatur ex architecto! Fuga tenetur perspiciatis
            possimus cumque excepturi nesciunt impedit rem?
          </p>
        </div>
  
        {loading ? (
          <div className="text-center">Loading...</div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
             {getAllProduct.filter(item => item.bestSeller === "true").map((item, index) => {
                            const { id, title, price, productImageUrl } = item
                            return (
                              <>
                                 <Link key={index} to={`/product/${id}`} className='text-gray-700 cursor-pointer'>
                              <div className="overflow-hidden">
                              <img className='hover:scale-110 transition ease-in-out' src={productImageUrl} alt="" />
                            </div>
                            <h2 className="pt-2 tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                                                  Luxnest
                                              </h2>
                            <p className="pt-3 pb-1 text-sm"> {title.substring(0, 25)}</p>
                            
                            <p className="text-sm font-medium">₹{price}</p>
                              </Link> 
                              </>
                           
                            )
                        })}
          </div>
        )}
      </div>
    );
  };

export default BestSeller