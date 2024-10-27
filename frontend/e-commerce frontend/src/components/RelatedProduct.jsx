import { useContext, useEffect , useState} from "react"
import { ShopContext } from "../context/ShopContext"
import { ProductItem , Title } from "./index.js"


const RelatedProduct = ({category,subCategory}) => {
  console.log(category,subCategory);
const { products } = useContext(ShopContext)

const [related,setRelated] = useState([]);

useEffect(()=>{

  if(products.length > 0){

    let pCopy = products.slice();
    // console.log("Category to filter:", category);
    // console.log("SubCategory to filter:", subCategory);
    
    pCopy = pCopy.filter((item) => {
        // console.log("Checking item:", item.category, item.subCategory);
        return item.category === category && item.subCategory === subCategory;
    });
    
    // console.log("Filtered results:", pCopy);
    setRelated(pCopy.slice(0,5));

  }


},[products])


  return (
    <div className="'my-24">
  <div className="text-center text-3xl py-2">
  <Title text1={'RELATED'} text2={'PRODUCTS'} />
  </div> 

  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
  {
        related.map((item,index) => (
          <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
        ))
      }
  </div>

    </div>
  )
}

export default RelatedProduct
