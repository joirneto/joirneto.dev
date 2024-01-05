import React from 'react';
import { FaLinkedin, FaGithub, } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { SiGmail } from "react-icons/si";

const Hero = () => {
    return (
        <div className='lg:grid lg:grid-cols-2 lg:pt-16 leading-none'>
        <div className='lg:pt-32 pt-16'>
            <h2 className="text-4xl pl-16">HI! I'M JOIR NETO</h2>
            <h2 className="font-bold text-4xl lg:text-5xl pl-16">SOFTWARE ENGINEER</h2>
            <div className='mx-8 px-8 relative border-orange border rounded md:px-16 pb-4 pt-10 mt-6'>
                <h3 className='text-white bg-orange absolute py-2 px-6 top-0 -mt-5 text-2xl font-bold uppercase'>Contact me</h3>
                <p className='text-center'>
                    <FaLinkedin className='text-4xl md:text-7xl inline-block mr-6' />
                    <FaGithub className='text-4xl md:text-7xl inline-block mr-6' />
                    <IoLogoWhatsapp className='text-4xl md:text-7xl inline-block mr-6' />
                    <SiGmail className='text-4xl md:text-7xl inline-block' />
                </p>
            </div>
        </div>
        <div className='px-12'>
            <img src='/images/profile.png' />
        </div>
    </div>
    )
};

export default Hero;