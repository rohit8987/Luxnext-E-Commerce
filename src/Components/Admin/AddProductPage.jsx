import { useContext, useState } from "react";
import MyContext from "../../Context/MyContext";
import { useNavigate } from "react-router-dom";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import Loader from "../loader/Loader";
import toast from "react-hot-toast";
import { fireDB } from "../../Firebase/Firebaseconfig";

const categoryList = [
  { name: "Women" },
  { name: "Kids" },
  { name: "Men" },
];

const subCategoryList = [
  { name: "T-shirt" },
  { name: "Jeans" },
  { name: "Shirt" },
  { name: "Top" },
  { name: "Jacket" },
];

const sizes = [
  { name: "S,M,L" },
  { name: "M,L,XL" },
  { name: "S,M,L,XL,XXL" },

];

const bestSeller = [
  { name: "true" },
  { name: "false" },
];

const AddProductPage = () => {
  const context = useContext(MyContext);
  const { loading, setLoading } = context;

  const navigate = useNavigate();

  const [product, setProduct] = useState({
    title: "",
    price: "",
    productImageUrl: "",
    
    category: "",
    subCategory: "",
    description: "",
    sizes: "S,M,L",
    bestSeller: "",
    quantity: 1,
    time: Timestamp.now(),
    date: new Date().toLocaleString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }),
  });

  console.log(product, 'product')

  const addProductFunction = async () => {
    const {
      title,
      price,
      productImageUrl,
      // ProductImageUrl2,
      // ProductImageUrl3,
      // ProductImageUrl4,
      category,
      subCategory,
      description,
      sizes,
      
      bestSeller,
    } = product;
console.log(productImageUrl)
    // Input validation
    if (
      !title ||
      !price ||
      !productImageUrl ||
      // !ProductImageUrl2 ||
      // !ProductImageUrl3 ||
      // !ProductImageUrl4 ||
      !category ||
      !subCategory ||
      !description ||
      !sizes ||
     
      !bestSeller
    ) {
      return toast.error("All fields are required");
    }

    setLoading(true);
    try {
      const productRef = collection(fireDB, "product");
      await addDoc(productRef, product);
      toast.success("Product added successfully");
      navigate("/admindashboard");
    } catch (error) {
      console.error(error);
      toast.error("Failed to add product");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="py-5 flex flex-col items-center justify-center px-4 sm:px-6">
        {loading && <Loader />}
      <div className="bg-white rounded-lg border border-gray-300 shadow-lg w-full max-w-md sm:max-w-3xl p-8">
        <h2 className="text-center text-2xl font-bold text-gray-900 mb-5">
          Add Product
        </h2>
        {/* Product Title */}
        <input
          type="text"
          name="title"
          value={product.title}
          onChange={(e) =>
            setProduct({ ...product, title: e.target.value })
          }
          className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400 mb-5"
          placeholder="Product Title"
          aria-label="Product Title"
        />

        {/* Product Price */}
        <input
          type="text"
          name="price"
          value={product.price}
          onChange={(e) =>
            setProduct({ ...product, price: e.target.value })
          }
          className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400 mb-5"
          placeholder="Product Price"
          aria-label="Product Price"
        />

        {/* Product Image URLs */}
        <input
          type="text"
          name="productImageUrl"
          value={product.productImageUrl}
          onChange={(e) =>
            setProduct({ ...product, productImageUrl: e.target.value })
          }
          className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400 mb-5"
          placeholder="Product Image URL"
        />

        {/* Select Inputs */}
        {[
          { name: "category", list: categoryList, label: "Category" },
          { name: "subCategory", list: subCategoryList, label: "Subcategory" },
          { name: "sizes", list: sizes, label: "Sizes" },
          { name: "bestSeller", list: bestSeller, label: "Best Seller" },
         
        ].map(({ name, list, label }, index) => (
          <select
            key={index}
            value={product[name]}
            onChange={(e) =>
              setProduct({ ...product, [name]: e.target.value })
            }
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-200 mb-5"
            aria-label={`Product ${label}`}
          >
            <option disabled value="">
              Select {label}
            </option>
            {list.map((item, idx) => (
              <option key={idx} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
        ))}

        {/* Product Description */}
        <textarea
          value={product.description}
          onChange={(e) =>
            setProduct({ ...product, description: e.target.value })
          }
          name="description"
          placeholder="Product Description"
          rows="5"
          className="w-full px-2 py-1 text-gray-700 bg-white border border-gray-200 rounded-md outline-none placeholder-gray-700 mb-5"
          aria-label="Product Description"
        ></textarea>

        {/* Add Product Button */}
        <button
          onClick={addProductFunction}
          type="button"
          className="hover:bg-gray-900 bg-gray-50 w-full hover:text-white text-black border border-gray-700 text-center py-2 font-bold rounded-md"
        >
          Add Product
        </button>
      </div>
    </form>
  );
};

export default AddProductPage;
