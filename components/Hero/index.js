import React from 'react';
import ContactMe from './ContactMe';

const Hero = () => {
    return (
        <div className='lg:grid lg:grid-cols-2 lg:pt-16 leading-none'>
        <div className='lg:pt-32 pt-16'>
            <h2 className="text-4xl pl-16">HI! I'M JOIR NETO</h2>
            <h2 className="font-bold text-4xl lg:text-5xl pl-16">SOFTWARE ENGINEER</h2>
            <h3 className="font-bold lg:text-lg pl-16">Back-End | Node.js | Serverless | AWS
        cloud | NextJs</h3>
            <ContactMe />
        </div>
        <div className='px-12'>
            <img src='/images/profile.png' />
        </div>
    </div>
    )
};

export default Hero;