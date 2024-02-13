import React from "react";

import { FaLinkedin, FaGithub, } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { SiGmail } from "react-icons/si";

const ContactMe = () => {
    return (
        <div className='mx-8 px-8 relative border-orange border rounded md:px-16 pb-4 pt-10 mt-6'>
        <h3 className='text-white bg-orange absolute py-2 px-6 top-0 -mt-5 text-2xl font-bold uppercase'>Contact me</h3>
        <p className='text-center'>
            <a href="https://www.linkedin.com/in/joirneto/" target="_blank"><FaLinkedin className='text-6xl md:text-7xl inline-block mr-6' /></a>
            <a href="https://github.com/joirneto" target="_blank"><FaGithub className='text-6xl md:text-7xl inline-block mr-6' /></a>
            <a href="mailto:joirnento@gmail.com?subject=Vamos trabalhar juntos?" target="_blank" ><SiGmail className='text-6xl md:text-7xl inline-block mr-6' /></a>
            <a href="https://api.whatsapp.com/send?phone=5585988111469&text=Vamos trabalhar juntos?" target="_blank"><IoLogoWhatsapp className='text-6xl md:text-7xl inline-block mr-6' /></a>
        </p>
    </div>
    )
} 

export default ContactMe;