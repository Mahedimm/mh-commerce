import Link from 'next/link';
import React from 'react';
import { urlFor } from '../lib/client';
const FooterBanner = ({bannerData}) => {
    return (
        <div className="bg-red-600 mt-36 mb-5 mx-2 rounded-xl relative ">
            <div className="flex justify-between  p-5 md:p-10">
                <div className="p-5 md:p-10">
                   <p className='text-[#1F3A33] font-semibold text-lg'>{bannerData.discount}</p> 
                   <h3 className="text-4xl md:text-7xl lg:text-9xl font-black text-white uppercase">{bannerData.largeText1}</h3>
                   <h3 className="text-4xl md:text-7xl lg:text-9xl font-black text-white uppercase">{bannerData.largeText2}</h3>
                   <p className="text-white text-sm font-semibold">{bannerData.saleTime}</p>
                </div>
                <div className="pt-10">
                    <p className="text-xl md:text-2xl font-bold text-[#1F3A33]">{bannerData.smallText}</p>
                    <h3 className="text-4xl md:text-6xl lg:text-7xl font-black text-white ">{bannerData.midText}</h3>
                    <p className="text-white text-sm font-semibold">{bannerData.desc}</p>
                    <Link href="">
                        <button className="py-1 px-3 md:mt-8  bg-[#1F3A33] rounded-full text-white font-semibold hover:bg-[#344B44] transition md:absolute right-28">{bannerData.buttonText}</button>
                    </Link>
                </div>
                <div>
                    <img src={urlFor(bannerData.image)} alt="" className="absolute top-[-30%] left-[20%] h-[300px] w-[300px] md:h-[500px] md:w-[500px] lg:h-[600px] lg:w-[600px]"/>
                </div>
            </div>
        </div>
    );
};

export default FooterBanner;