// import React from 'react'
import { useState } from "react";
import { assets } from "../assets/frontend_assets/assets.js";
import { Link, NavLink } from "react-router-dom";



const Navbar = () => {

    const [visible, setVisible] = useState(false);

    return (
        <div className="flex justify-between items-center py-5 font-medium">
           <Link to='/'><img src={assets.logo} alt="Logo" className="w-36" /></Link>

            <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
                <NavLink to="/" className="flex flex-col items-center gap-1">
                    <p>HOME</p>
                    <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
                </NavLink>
                <NavLink to="/collection" className="flex flex-col items-center gap-1">
                    <p>COLLECTION</p>
                    <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
                </NavLink>
                <NavLink to="/about" className="flex flex-col items-center gap-1">
                    <p>ABOUT</p>
                    <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
                </NavLink>
                <NavLink to="/contact" className="flex flex-col items-center gap-1">
                    <p>CONTACT</p>
                    <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
                </NavLink>
            </ul>

            <div className="flex items-center gap-6">
                <img
                    src={assets.search_icon}
                    alt="search-icon"
                    className="w-5 cursor-pointer"
                />

                <div className="group relative">
                   
                    <img
                        className="w-5 cursor-pointer"
                        src={assets.profile_icon}
                        alt="profile-icon"
                    />
                    
                    <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
                        <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                            <p className="cursor-pointer hover:text-black">My Profile</p>
                            <p className="cursor-pointer hover:text-black">Orders</p>
                            <p className="cursor-pointer hover:text-black">Logout</p>
                        </div>
                    </div>
                </div>
                <Link to='/cart' className="relative">
                    <img src={assets.cart_icon} alt="cart-icon" className="w-5 min-w-5" />
                    <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">10</p> {/*REVIEW : maybe in text-[-8px]*/}
                </Link>
                <img onClick={() => setVisible(!visible)} src={assets.menu_icon} alt="menubar" className="w-5 cursor-pointer sm:hidden" />
            </div>
            {/* //TODO : Sidebar menu for small screens */}
            <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? "w-full" : "w-0"}`} >
                <div className="flex flex-col text-gray-600">
                    <div className="flex items-center gap-3 p-3">
                        <img onClick={() => setVisible(!visible)} src={assets.dropdown_icon} alt="dropdown" className="h-4 rotate-180 cursor-pointer" />
                        <p>Back</p>
                    </div>
                    <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to='/'>HOME</NavLink>
                    <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to='/collection'>COLLECTION</NavLink>
                    <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to='/about'>ABOUT</NavLink>
                    <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to='/contact'>CONTACT</NavLink>
                </div>
            </div>
        </div>
    )
};

export default Navbar;