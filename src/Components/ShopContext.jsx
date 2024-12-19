
import { createContext, useState } from "react";
import { products } from "../assets/assets"
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const currency = "₹";
    const delivery_fee = 99;
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false)
    const [cartItems, setCartItems] = useState({});
    const navigate = useNavigate ();


    const addToCart = async (itemId, sizes) => {

        if (!sizes) {
            toast.error('Select Product Size')
        }

        let cartData = structuredClone(cartItems);

        if (cartData[itemId]) {
            if (cartData[itemId][sizes]) {
                cartData[itemId][sizes] += 1;
            }
            else {
                cartData[itemId][sizes] = 1;
            }
        }
        else {
            cartData[itemId] = {};
            cartData[itemId][sizes] = 1;
        }
        setCartItems(cartData);
    }

    useEffect(() => {
        console.log(cartItems)
    }, [cartItems])


    const getCartCount = () => {
        let totalCount = 0;
        for (const items in cartItems) {
            for (const item in cartItems[items]) {
                try {
                    if (cartItems[items][item] > 0) {
                        totalCount += cartItems[items][item];
                    }
                } catch (error) {

                }
            }
        }
        return totalCount;
    }


    const updateQuantity = async (itemId,sizes,quantity)=>{
        let cartData = structuredClone(cartItems)

        cartData[itemId][sizes]=quantity;
        setCartItems (cartData);
    }

    const getCartAmount = () =>{
        let totalAmount = 0;
        for(const items in cartItems){
            let itemInfo = products.find((product)=>product._id === items);
            for(const item in cartItems[items]){
                try{
                    if(cartItems[items][item] > 0){
                        totalAmount += itemInfo.price * cartItems[items][item];
                    }
                } catch (error){

                }
            }
        }
        return totalAmount;
    }

    const value = {
        products, currency, delivery_fee,
        search, setSearch, showSearch, setShowSearch,
        cartItems, addToCart,
        getCartCount, updateQuantity,
        getCartAmount,navigate

    }
    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider