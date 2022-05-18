import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const Footer = () => {
    return (
        <div className="h-32 w-full flex-col text-center flex justify-center items-center bg-[#D5EAE3] mt-20 shadow-2xl text-[#3B554E] mb-0 absolute bottom-0">
           <p>2022 MH Commerce All rights reserved <span className="font-semibold hover:underline cursor-pointer">@Mahedihasan</span></p>
           <div className="flex gap-2 text-[#3B554E]">
               <AiFillGithub className="text-4xl cursor-pointer"/>
                <AiFillLinkedin className="text-4xl cursor-pointer"/>
           </div>
        </div>
    );
};

export default Footer;