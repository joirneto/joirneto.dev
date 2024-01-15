import React from 'react';
import EducationItem from './EducationItem';

const degrees = [
    {
        degree:'Graduação',
        subject:'Engenharia da Computação',
        institution:'Universidade Federal do Ceará'
    },
    {
        degree:'Graduação',
        subject:'Licenciatura em Pedagogia',
        institution:'Universidade Estadual Vale do Acaraú'
    }
]
const Education = () => {
    return (
        <div>
            <h3 className='text-orange text-4xl text-center font-bold uppercase mt-10 mb-5'>My Education</h3>
            <div className='mx-8 lg:grid lg:grid-cols-2 leading-none bg-white roudend-lg shadow-lg py-6'>
            {degrees.map((degree, i) => <EducationItem key={'i' + i} degree={degree} />)}
            </div>
        </div>
    )
}

export default Education;