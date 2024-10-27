import { useContext, useEffect , useState } from "react"
import { ShopContext } from "../context/ShopContext"
import { Title } from "../components/index.js";

const Cart = () => {

  const {cartItems , currency , products } = useContext(ShopContext);
  const [cartData,setCartData] = useState([]);

  useEffect(() => {
    let tempData = [];

    for(const items in cartItems){
      for(const size in cartItems[items]){
        tempData.push(
          {
            _id : items,
            size : size,
            quantity : cartItems[items][size]
          }
        )
      }
    }
    setCartData(tempData);
  },[cartItems])

  return (
    <div className="border-t pt-14">

      <div className="text-2xl mb-3">
  <Title text1="YOUR" text2="CART" />
      </div>
      
      <div>
 {
  cartData.map((item,index) => {

    const productData = products.find((product) => product._id === item._id);

    return (
      <div key={index} className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4">
        <div className="flex items-start gap-6">
          <img src={productData.image[0]} alt="" className="w-16 sm:w-20" />

        </div>

      </div>
    )
  }
  )
 }
      </div>

    </div>
  )
}

export default Cart
