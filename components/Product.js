import Link from 'next/link';
import React from 'react';
import { urlFor } from '../lib/client';
const Product = ({product:{image,name,slug,price}}) => {
    return (
        <div className="">
             <Link href={`/product/${slug.current}`}>
                 <div className="cursor-pointer will-change-transform  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
                     <img src={urlFor(image && image[0])} alt=""  className='rounded-2xl bg-[#D5EAE3] transform transition  ' width={250} height={250}/>
                     <p >{name}</p>
                     <p className="font-black text-xl">{price} $</p>
                 </div>
             </Link>
        </div>
    );
};

export default Product;