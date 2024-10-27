import { useContext , useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext.jsx";
import { assets } from "../assets/frontend_assets/assets.js";
import { useLocation } from "react-router-dom";

const SearchBar = () => {

    const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
    const location = useLocation();
    const [visible , setVisible] = useState(false);

    useEffect(() => {
        if(location.pathname === '/collection' ){
            setVisible(true);
        }else{
            setVisible(false);
        }
    },[location])

    return showSearch && visible? (
        <div className="border-t border-b bg-gray-50 text-center">
            <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
                <input onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search" value={search} className="flex-1 outline-none bg-inherit text-sm" />
                <img  className="w-4" src={assets.search_icon} alt="search" />
            </div>
            <img  onClick={() => setShowSearch(false) }   className="inline w-3 cursor-pointer"  src={assets.cross_icon} alt="close" />
        </div>
    ) : null
}

export default SearchBar