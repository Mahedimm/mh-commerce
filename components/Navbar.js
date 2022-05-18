import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { AiOutlineShopping } from 'react-icons/ai';
const Navbar = () => {

    const [isScrolled, setIsScrolled] = useState(false);

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
            <Link href="/">
            <button>
              <AiOutlineShopping className="text-2xl cursor-pointer hover:transition relative " />
              <span className=' absolute  text-white text-sm right-[16px] md:right-[32px] top-9 md:top-10 w-[18px] h-[18px] rounded-full bg-red-600 text-center'>1</span>
              </button>
            </Link>
          </div>
        </header>
    );
};

export default Navbar;