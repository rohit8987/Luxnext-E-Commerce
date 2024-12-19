import { useContext, useEffect, useState } from "react"
import { ShopContext } from "./ShopContext"
import Title from "./Title"
import ProductItems from "./ProductItems"


const BestSeller = () => {
const {products} = useContext(ShopContext)
const [bestSeller, setBestSeller] = useState([])

useEffect(()=>{
    const bestProduct = products.filter((item)=>(item.bestSeller));
    setBestSeller(bestProduct.slice(0,5))
},[])
  return (
    <div className="my-10">
        <div className="text-center text-3xl py-8">
            <Title text1={"BEST"} text2={"SELLERS"}/>
            <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur voluptatem provident totam illum obcaecati minima tempora explicabo,
             ab quos consequuntur, facere animi ipsa culpa omnis eaque quibusdam, maxime consequatur laborum!
            </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
            {
                bestSeller.map((item,index)=>(
                    <ProductItems key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                ))
            }
        </div>
    </div>
  )
}

export default BestSeller