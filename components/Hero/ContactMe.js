import React from "react";

import { FaLinkedin, FaGithub, } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { SiGmail } from "react-icons/si";

const ContactMe = () => {
    return (
        <div className='mx-8 px-8 relative border-orange border rounded md:px-16 pb-4 pt-10 mt-6'>
        <h3 className='text-white bg-orange absolute py-2 px-6 top-0 -mt-5 text-2xl font-bold uppercase'>Contact me</h3>
        <p className='text-center'>
            <FaLinkedin className='text-4xl md:text-7xl inline-block mr-6' />
            <FaGithub className='text-4xl md:text-7xl inline-block mr-6' />
            <IoLogoWhatsapp className='text-4xl md:text-7xl inline-block mr-6' />
            <SiGmail className='text-4xl md:text-7xl inline-block' />
        </p>
    </div>
    )
} 

export default ContactMe;