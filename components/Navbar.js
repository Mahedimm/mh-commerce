import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { AiOutlineShopping } from 'react-icons/ai';
import { useStateContext } from '../context/StateContext';
import Cart from './Cart';
const Navbar = () => {

    const [isScrolled, setIsScrolled] = useState(false);
    const {showCart,setShowCart,totalQuantity} = useStateContext()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

    return (
        <header className={`${isScrolled ? "bg-[#1e3932]":"bg-white"} flex items-center justify-between px-5 lg:px-10 mb-2`}>
          <div className="
          ">
          <Link href="/">
            <h1 className="text-red-600 text-xl font-extrabold cursor-pointer ">MH COMMERCE</h1>
            </Link>
          </div>
          <div className={`${isScrolled ? "text-white":"text-black"}`}>
           
            <button className='hover:transition relative' onClick={()=>setShowCart(!showCart)}>
              <AiOutlineShopping className="text-2xl cursor-pointer  hover:" />
              <span className=' absolute  text-white text-sm right-[-8px] top-[-5px]  w-[18px] h-[18px] rounded-full bg-red-600 text-center'>{totalQuantity}</span>
              </button>
          </div>
          {showCart && <Cart />}
         
        </header>
    );
};

export default Navbar;