import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { ShopContext } from "../Components/ShopContext";
import StarIcon from '@mui/icons-material/Star';
import { doc, getDoc, setDoc, Timestamp } from "firebase/firestore";
import StarHalfIcon from '@mui/icons-material/StarHalf';
// import { fireDB } from "../../Firebase/Firebaseconfig";
import Relatedproducts from "../Components/RelatedProducts"
import { fireDB } from "../Firebase/Firebaseconfig";

const Product = () => {

  const { id } = useParams();
  // const { product, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState({});
  const [image, setImage] = useState(' ')
  const [size, setSize] = useState('')
  // const context = useContext(MyContext);
    // const { loading, getAllProduct } = context;
  


    
  // const fetchProductData = async () => {

  //   product.map((item) => {
  //     if (item._id === id) {
  //       setProductData(item)
  //       setImage(item.image[0])
  //       return null;
  //     }
  //   })
  // }

  console.log(productData, "product", id)

  useEffect(() => {
    const fetch_data = async () => {
      const productTemp = await getDoc(doc(fireDB, "product", id));
      const product_data = productTemp.data();
      setProductData(product_data)
    }
    fetch_data();
  }, [id])

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
              <img onClick={() => setImage(item)} src={productData.productImageUrl} className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer" alt="" />
          </div>
          <div className="w-full sm:w-[80%]">
            <img className="w-full h-auto " src={image} alt="" />
          </div>
        </div>
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2 text-yellow-400">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarHalfIcon />
            <p className="pl-2 text-black">(121)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">{productData.price}</p>
          <p className="mt-5 text-gray-500 md:w-4/5">{productData.description}</p>
          <div className="flex flex-col gap-4 my-8">
            <p className="">Select Size</p>
            <div className="flex gap-2">
              {/* {productData.sizes.map((item, index) => (
                <button onClick={() => setSize(item)} className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-gray-700' : ''}`} key={index} > {item} </button>
              ))} */}
            </div>
          </div>
          <button onClick={()=>addToCart(productData._id,size)} className="uppercase bg-black text-white px-8 py-3 text-sm active:bg-gray-600">Add to cart</button>
          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original Product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">Description</b>
          <p className="border px-5 py-3 text-sm">Reviews (121)</p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
          <p className="">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, exercitationem quasi illum sed consequatur placeat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum possimus in nostrum! </p>
          <p className="">An E-commerce Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ut expedita dignissimos. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet nemo eaque deserunt est corrupti hic! </p>
        </div>
      </div>

      <Relatedproducts category={productData.category} subCategory={productData.subCategory}/>
    </div>
  ) : <div className="">
    "waiter"
  </div>
}

export default Product