import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { BsBagCheckFill } from 'react-icons/bs';
import { useStateContext } from '../context/StateContext';
import { runFIreworks } from '../lib/utils';


const Success = () => {
    const {setCartItems,setTotalPrice,setTotalQuantities} = useStateContext();
    const {order,setOrder} = useState(null);

    useEffect(() => {
        localStorage.clear();
        setCartItems([]);
        setTotalPrice(0);
        setTotalQuantities(0);
        runFIreworks ();
    } ,[]);
    return (
        <div className="h-screen flex justify-center items-center">
        <div className="bg-[#D4E9E2] h-80 flex items-center justify-center  px-28 rounded-lg">
            <div className="flex justify-center items-center flex-col gap-4">
                <p className="text-4xl text-green-600">
                    <BsBagCheckFill />
                </p>
                <div>
                <h2 className='text-xl text-[#1F3A33] font-extrabold'>Thank you for your order!</h2>
                <p className="text-center font-semibold">check your inbox for the receipt.</p>
                </div>
                <p className="text-center font-semibold">
                    If you have any questions, please contact us at<br/> <a href="mailto:mahedihasan.contact@gmmail.com" className='text-center hover:underline text-red-600 hover:text-red-600/50'>
                        mahedihasan.contact@gmail.com
                    </a>
                </p>
                <Link href="/">
                    <button className='bg-red-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-red-600/50'>Continue Shopping</button>
                </Link>
            </div>
        </div>
        </div>
    );
};

export default Success;