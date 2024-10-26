import { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext.jsx'
import { assets } from '../assets/frontend_assets/assets.js';
import { ProductItem, Title } from '../components/index.js';
import { Await } from 'react-router-dom';
const Collection = () => {

  const { products } = useContext(ShopContext);

  const [showFilter, setShowFilter] = useState(false);
  const [filterProduct, setFilterProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType,setSortType] = useState('relevant');

  const toggleCategory = (e) => {

    if (category.includes(e.target.value)) {
      setCategory(prev => prev.filter(item => item !== e.target.value));
    }
    else {
      setCategory(prev => [...prev, e.target.value])
    }
  }


  const toggleSubCategory = (e) => {

    if (subCategory.includes(e.target.value)) {
      setSubCategory(prev => prev.filter(item => item !== e.target.value));
    } else {
      setSubCategory(prev => [...prev, e.target.value]);
    }
  }

  const applyFilter =  () => {

    let productsCopy = products.slice();

    if (category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category));
    }


    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory));
    }
   setFilterProduct(productsCopy);
    console.log(productsCopy);
    // sortProduct('nope'); //NOTE : This code is not working for operation like first sorting then filtering . TO know more read DOCS
    sortProduct('nope',productsCopy);
  }

  const sortProduct = (check = '',productToSort = filterProduct) => {
    if(check === 'nope' && sortType === 'relevant'){
      return;
    }

    // let sortfpCopy =  filterProduct.slice();
    let sortfpCopy =  productToSort.slice();
    console.log(sortType);
    console.log(sortfpCopy);
    switch(sortType){
      case 'low-high':
        setFilterProduct(sortfpCopy.sort((a,b) => (a.price-b.price))); 
        break;

      case 'high-low':
        setFilterProduct(sortfpCopy.sort((a,b) => (b.price-a.price)));
      break;

      default:
      applyFilter();
      break;
    }
    
  }

  useEffect(()=>{
   sortProduct();
  },[sortType])

  // useEffect(() => {
  //   setFilterProduct(products);
  // }, [products]);

  useEffect(() => {
  
    applyFilter();


  }, [category, subCategory])




  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/* Filter options */}
      <div className='min-w-60'>
        <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-xl flex items-center gap-2 cursor-pointer'>FILTERS
          <img src={assets.dropdown_icon} alt="drop-down" className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} />
        </p>
        {/* Category Filters */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Men'} onChange={toggleCategory} />Men
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Women'} onChange={toggleCategory} />Women
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Kids'} onChange={toggleCategory} />Kids
            </p>
          </div>
        </div>

        {/* SubCategory Filters*/}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Topwear'} onChange={toggleSubCategory} />Topwear
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Bottomwear'} onChange={toggleSubCategory} />BottomWear
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Winterwear'} onChange={toggleSubCategory} />WinterWear
            </p>
          </div>
        </div>
      </div>
      {/* Right Side */}
      <div className='flex-1'>
        <div className='flex  justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'ALL'} text2={'COLLECTIONS'} />
          {/* Product Sort */}
          <select onChange={(e) => setSortType(e.target.value)} className='border-2 border-gray-300 rounded-xl px-2 text-sm'>
            <option value={"relevant"}>Sort by: Relevant</option>
            <option value={"low-high"}>Sort by: Low to High</option>
            <option value={"high-low"}>Sort by: High to Low</option>
            {/* <option value="a-z">Sort by: A to Z</option> */}
            {/* <option value="z-a">Sort by: Z to A</option> */}
          </select>
        </div>
        {/* Map Products */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  gap-4 gap-y-6' >
          {
            filterProduct.map(
              (item, index) => (
                <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
              )
            )
          }

        </div>

      </div>
    </div>
  )
}

export default Collection
