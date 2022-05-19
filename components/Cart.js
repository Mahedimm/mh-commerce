import Link from 'next/link';
import React, { useRef } from 'react';
import toast from 'react-hot-toast';
import { AiOutlineLeft, AiOutlineMinus, AiOutlinePlus, AiOutlineShopping } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';
import { useStateContext } from '../context/StateContext';
import { urlFor } from '../lib/client';
import getStripe from '../lib/getStripe';




const Cart = () => {
    const cartRef = useRef();
    const{totalPrice,totalQuantity,cartItems,setShowCart,showCart,toggleCartItemQuantity,onRemove} = useStateContext();
    const handleCheckout = async()=>{
        const stripe = await getStripe();

        const response = await fetch('/api/stripe',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
        body:JSON.stringify(cartItems),
        });

        if(response.statusCode === 5000) return;

        const data = await response.json();

        toast.loading('Redirecting...');

        stripe.redirectToCheckout({sessionId:data.id});
    }

    return (
        <div className="w-screen  fixed right-0 top-0 z-50 transition-all bg-black/40" ref={cartRef}>
        <div className='h-screen  w-4/5 md:w-2/3 lg:w-1/3 bg-white float-right py-10 px-3 relative'>
            <button className="text-red flex items-center text-xl font-semibold cursor-pointer gap-1 ml-3 border-0 bg-transparent " onClick={()=>setShowCart(!showCart)}>
                <AiOutlineLeft className="text-2xl cursor-pointer  hover:text-black/50" />
                <span className="">Your Cart</span>
                <span className="text-red-600">({totalQuantity} items)</span>
            </button>
            {cartItems.length < 1 && (
                <div className="flex flex-col items-center">
                    <AiOutlineShopping className="text-9xl cursor-pointer " />
                    <h3 className='text-2xl font-semibold'>Your shopping bag is empty </h3>
                    <Link href='/'>
                        <button className=" mt-10 bg-red-600 rounded-full cursor-pointer  hover:bg-red-600/50 px-6 py-2 text-md font-semibold text-white" onClick={()=>setShowCart(!showCart)}>
                            CONTINUE SHOPPING
                        </button>
                    </Link>

                </div>)}
                <div className='flex flex-col mt-10'>
                {cartItems.length > 0 && ( cartItems.map(item => (
                    <div className="flex gap-8 p-5 relative" key={item._id}>
                        <img src={urlFor(item?.image[0])} alt="" className="w-[100px] h-[100px] lg:w-[150px] lg:[h-150px] rounded-xl bg-[#D5EAE3]"/>
                        <div className="">
                           <div className="flex justify-between  top-0 w-[250px] flex-col xl:flex-row ">
                               <h5 className="text-xl font-bold text-[#1F3A33]">{item.name}</h5>
                               <h5 className="text-xl font-bold text-red-600">${item.price}</h5>
                           </div> 
                           <div className='flex mt-2 xl:mt-8 xl:justify-between gap-2 '>
                               <div>
                                <p className="border-2 inline-block px-1">
                                        <span className='inline-block   text-xl cursor-pointer text-[#f02d34]' onClick={()=>toggleCartItemQuantity(item._id,'dec')}><AiOutlineMinus className="pt-2"/></span> 
                                        <span className="text-xl border-x-2 px-2  inline-block">{item.quantity}</span>
                                        <span className='inline-block    text-xl cursor-pointer text-green-600' onClick={()=>toggleCartItemQuantity(item._id,'inc')}><AiOutlinePlus className="pt-2"/></span> 
                                </p>
                               </div>
                                 <button onClick={()=>{onRemove(item)}}>
                                     <TiDeleteOutline className="text-2xl cursor-pointer text-red-600" />
                                 </button>
                           </div>
                        </div>
                    </div>
                )))}
            </div>
            {cartItems.length > 0 && (
                <div className="absolute bottom-3 right-1 w-full px-8 py-16">
                    <div className="flex justify-between text-xl font-bold">
                        <h3 className='text-[#1F3A33]'>Subtotal:</h3>
                        <h3 className="text-red-600">${totalPrice}</h3>
                    </div>
                    <div className="flex items-center justify-center mt-5 bg-red-600 rounded-full cursor-pointer mx-5 hover:bg-red-600/50">
                        <button className='py-2 text-white text-' onClick={handleCheckout}>Pay with Stripe</button>
                    </div>
                </div>
            )}
            </div>
          
        </div>
    );
};

export default Cart;