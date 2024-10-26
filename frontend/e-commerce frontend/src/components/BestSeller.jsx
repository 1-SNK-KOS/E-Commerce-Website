import { useContext, useState, useEffect } from "react"
import { ShopContext } from "../context/ShopContext"
import { ProductItem, Title } from "./index.js"

const BestSeller = () => {

    const { products } = useContext(ShopContext);
    const [bestSeller, setBestSeller] = useState([]);
     
    useEffect(() => {
        const bestProduct = products.filter((item) => item.bestseller === true);
        setBestSeller(bestProduct.slice(0, 10));
    }, [products])
    return (
        <div className="my-10">
            <div className="text-center py-8 text-3xl">
                <Title text1={'BEST'} text2={'SELLERS'} />
                <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, iste?
                </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
                {
                    bestSeller.map(
                        (item, index) => (
                            <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                        )
                    )
                }
            </div>

        </div>
    )
}

export default BestSeller