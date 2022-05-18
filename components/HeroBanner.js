import Link from 'next/link';
import React from 'react';
import { urlFor } from '../lib/client';
const HeroBanner = ({bannerData}) => {

    return (
        <div className="bg-[#F0EBE0] py-20 px-10 relative  h-[500px] lg:h-[650px]  rounded-lg ">
        
            <div>
                <p className="text-sm font-semibold">{bannerData.discount}</p>
                <h3 className=" text-5xl md:text-7xl font-extrabold text-[#227953] ">{bannerData.midText}</h3>
                <h1 className=" text-7xl md:text-9xl font-black text-white uppercase">{bannerData.largeText1}</h1>
                <img src={urlFor(bannerData.image)} alt="headphones" srcset="" className="absolute top-0 right-[10%] md:right-[20%] xl:right-[30%]  h-[300px] w-[300px] lg:h-[600px] lg:w-[600px]" />
                <div>
                <Link href={`/product/${bannerData.product}`}>
                    <button className="py-1 px-3 mt-8 ml-2 bg-[#1F3A33] rounded-full text-white font-semibold hover:bg-[#344B44] transition  ">{bannerData.buttonText}</button>
                  
                </Link>
                <div className='absolute right-14 text-left bottom-14'>
                    <h5 className="text-md font-semibold">Description</h5>
                    <p className='text-gray-400 text-sm font-medium'>{bannerData.desc}</p>
                </div>
                </div>
            </div>
        </div>
    );
};

export default HeroBanner;