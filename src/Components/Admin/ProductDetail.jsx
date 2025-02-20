import { Link, useNavigate } from "react-router-dom";
import MyContext from "../../Context/MyContext";
import { useContext } from "react";
import { fireDB } from "../../Firebase/Firebaseconfig";
import { deleteDoc, doc } from "firebase/firestore";
import toast from "react-hot-toast";
import Loader from "../loader/Loader";


const ProductDetail = () => {
    const context = useContext(MyContext)
    const { loading, setLoading, getAllProduct, getAllProductFunction } = context;
    console.log(getAllProduct)

    const navigate = useNavigate();

    const deleteProduct = async (id) => {
        setLoading(true)
        try {
            await deleteDoc(doc(fireDB, 'product', id))
            toast.success('Product Deleted successfully')
            getAllProductFunction()
            setLoading(false)
        }
        catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    return (
        <div>
               <div className="flex justify-center relative top-40 ">
               {loading && <Loader/>}
               </div>
            <div className="py-5 flex justify-between items-center">
                {/* text  */}
                <h1 className=" text-xl text-gray-800 font-bold">All Product</h1>
                {/* Add Product Button  */}
                <Link to={'/addproduct'}>
                    <button className="px-5 py-2 bg-gray-50 border border-gray-200 rounded-lg">Add Product</button>
                </Link>
            </div>

            {/* table  */}
            <div className="w-full overflow-x-auto">
                <table className="w-full text-left border border-collapse sm:border-separate border-gray-100 text-gray-400" >
                    <tbody>
                        <tr>
                            <th scope="col" className="h-12 px-4 text-md border-l first:border-l-0 border-gray-100 text-slate-700 bg-slate-100 font-bold fontPara">S.No.</th>
                            <th scope="col" className="h-12 px-4 text-md font-bold fontPara border-l first:border-l-0 border-gray-100 text-slate-700 bg-slate-100">Image</th>
                            <th scope="col" className="h-12 px-4 text-md font-bold fontPara border-l first:border-l-0 border-gray-100 text-slate-700 bg-slate-100">Title</th>
                            <th scope="col" className="h-12 px-4 text-md font-bold fontPara border-l first:border-l-0 border-gray-100 text-slate-700 bg-slate-100">Price</th>
                            <th scope="col" className="h-12 px-4 text-md font-bold fontPara border-l first:border-l-0 border-gray-100 text-slate-700 bg-slate-100">Category</th>
                            <th scope="col" className="h-12 px-4 text-md font-bold fontPara border-l first:border-l-0 border-gray-100 text-slate-700 bg-slate-100">SubCategory</th>
                            <th scope="col" className="h-12 px-4 text-md font-bold fontPara border-l first:border-l-0 border-gray-100 text-slate-700 bg-slate-100">Sizes</th>
                            <th scope="col" className="h-12 px-4 text-md font-bold fontPara border-l first:border-l-0 border-gray-100 text-slate-700 bg-slate-100">Bestseller</th>
                            <th scope="col" className="h-12 px-4 text-md font-bold fontPara border-l first:border-l-0 border-gray-100 text-slate-700 bg-slate-100">Date</th>
                            <th scope="col" className="h-12 px-4 text-md font-bold fontPara border-l first:border-l-0 border-gray-100 text-slate-700 bg-slate-100">Action</th>
                            <th scope="col" className="h-12 px-4 text-md font-bold fontPara border-l first:border-l-0 border-gray-100 text-slate-700 bg-slate-100">Action</th>

                        </tr>

                        {getAllProduct.map((item, index) => {
                            const { id, title, price, category,subCategory,sizes,size, bestSeller, date, productImageUrl } = item
                            console.log(item, 'test');
                            return (

                                <tr key={index} className="text-gray-300">
                                <td className="h-12 px-4 text-md transition duration-300 border-t border-l first:border-l-0 border-gray-100 stroke-slate-500 text-slate-500 ">
                                  {index + 1}.
                                </td>
                                <td className="h-12 px-4 text-md transition duration-300 border-t border-l first:border-l-0 border-gray-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                                  <div className="flex justify-center gap-2">
                                    {console.log(productImageUrl)}
                                    {[productImageUrl].map((img, idx) => (
                                      img ? <img key={idx} className="w-20 h-20 object-cover" src={img} alt={`Product Image ${idx + 1}`} /> : null
                                    ))}
                                  </div>
                                </td>
                                <td className="h-12 px-4 text-md transition duration-300 border-t border-l first:border-l-0 border-gray-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                                  {title}
                                </td>
                                <td className="h-12 px-4 text-md transition duration-300 border-t border-l first:border-l-0 border-gray-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                                  ₹{price}
                                </td>
                                <td className="h-12 px-4 text-md transition duration-300 border-t border-l first:border-l-0 border-gray-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                                  {category}
                                </td>
                                <td className="h-12 px-4 text-md transition  duration-300 border-t border-l first:border-l-0 border-gray-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                                  {subCategory}
                                </td>
                                <td className="h-12 px-4 text-md transition duration-300 border-t border-l first:border-l-0 border-gray-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                                  {sizes || size}
                                </td>
                                <td className="h-12 px-4 text-md transition duration-300 border-t border-l first:border-l-0 border-gray-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                                  {bestSeller}
                                </td>
                                <td className="h-12 px-4 text-md transition duration-300 border-t border-l first:border-l-0 border-gray-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                                  {date}
                                </td>
                                <td 
                                  onClick={() => navigate(`/updateproduct/${id}`)}
                                  className="h-12 px-4 text-md transition duration-300 border-t border-l first:border-l-0 border-gray-100 stroke-slate-500  text-green-500 cursor-pointer ">
                                  Edit
                                </td>
                                <td 
                                  onClick={() => deleteProduct(id)}
                                  className="h-12 px-4 text-md transition duration-300 border-t border-l first:border-l-0 border-gray-100 stroke-slate-500  text-red-500 cursor-pointer ">
                                  Delete
                                </td>
                              </tr>
                              

                            )
                        })}


                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ProductDetail;