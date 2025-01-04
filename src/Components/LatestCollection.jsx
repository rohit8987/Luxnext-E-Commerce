import { useContext, useEffect, useState } from "react";
import MyContext from "../Context/MyContext";
import Title from "./Title";
import { Link, useNavigate } from "react-router-dom";


const LatestCollection = () => {
  const [latestProducts, setLatestProducts] = useState([]);

  
  const context = useContext(MyContext);
  const { loading, getAllProduct } = context;

  // Fetch products on component mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const allProducts = await getAllProduct();
        setLatestProducts(allProducts.slice(0, 10)); // Get the first 10 products
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [getAllProduct]);

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={"LATEST"} text2={"COLLECTIONS"} />
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
           {getAllProduct.slice(0, 5).map((item, index) => {
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

export default LatestCollection;




// const LatestCollection = () => {
//   const navigate = useNavigate();

//   const context = useContext(MyContext);
//   const { loading, getAllProduct } = context;

//   const cartItems = useSelector((state) => state.cart)
//   console.log(cartItems)

  

//   return (
//       <div className="mt-10">
//           {/* Heading  */}
//           <div className="">
//               <h1 className=" text-center mb-5 text-2xl font-semibold">Bestselling Products</h1>
//           </div>

//           {/* main  */}
//           <section className="text-gray-600 body-font">
//               <div className="container px-5 py-5 mx-auto">
//                   <div className="flex justify-center">
//                       {loading && <Loader />}
//                   </div>
//                   <div className="flex flex-wrap -m-4">
//                       {getAllProduct.slice(0, 8).map((item, index) => {
//                           const { id, title, price, productImageUrl } = item
//                           return (
//                               <div key={index} className="p-4 w-full md:w-1/4 ">
//                                   <div className="h-full border border-gray-300 rounded-xl overflow-hidden shadow-md cursor-pointer">
//                                       <img
//                                           onClick={() => navigate(`/productinfo/${id}`)}

//                                           className="lg:h-80  h-96 w-full"
//                                           src={productImageUrl}
//                                           alt="blog"
//                                       />
//                                       <div className="p-6">
//                                           <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
//                                               Luxnest
//                                           </h2>
//                                           <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
//                                               {title.substring(0, 25)}
//                                           </h1>
//                                           <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
//                                               ₹{price}
//                                           </h1>

                                          
//                                       </div>
//                                   </div>
//                               </div>
//                           )
//                       })}
//                   </div>
//               </div>
//           </section>
//       </div>
//     );
// }

// export default LatestCollection;