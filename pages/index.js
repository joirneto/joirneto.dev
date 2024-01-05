import React from 'react';
import getUser from '../utils/getUser';
import { FaLinkedin, FaGithub, } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { SiGmail } from "react-icons/si";
import { RiGitRepositoryLine } from "react-icons/ri";
import { HiUsers } from "react-icons/hi2";

const Index = ({ user, repos }) => {
    return (
        <div className='container mx-auto'>
            <div className='grid grid-cols-2 pt-16 leading-none'>
                <div className='pt-32'>
                    <h2 className="text-4xl pl-16">HI! I'M JOIR NETO</h2>
                    <h2 className="font-bold text-5xl pl-16">SOFTWARE ENGINEER</h2>
                    <div className='relative border-orange border rounded px-16 pb-4 pt-10 mt-6'>
                        <h3 className='text-white bg-orange absolute py-2 px-6 top-0 -mt-5 text-2xl font-bold uppercase'>Contact me</h3>
                        <p>
                            <FaLinkedin className='text-7xl inline-block mr-6' />
                            <FaGithub className='text-7xl inline-block mr-6' />
                            <IoLogoWhatsapp className='text-7xl inline-block mr-6' />
                            <SiGmail className='text-7xl inline-block' />
                        </p>
                    </div>
                </div>
                <div >
                    <img className='pr-16' style={{ borderBottomRightRadius: '10%' }} src='/images/profile1.png' />
                </div>
            </div>
            <div className='bg-white roudend-lg shadow-lg py-12 px-16'>
                <h3 className='text-4xl text-center text-orange'> What I do</h3>
                <p className='text-2xl '>BACKEND DEVELOPER JS</p>
                <p className='text-2xl'>AWS CLOULD</p>
            </div>
            <div>
                <h3 className='text-orange text-4xl text-center font-bold uppercase mt-10 mb-5'>My Education</h3>
                <div className='grid grid-cols-2 leading-none bg-white roudend-lg shadow-lg py-6'>
                    <div className='border-dashed border-l px-12'>
                        <h4 className='text-lg uppercase font-bold mb-2 text-orange'>Graduação</h4>
                        <p className='text-2xl uppercase'>Engenharia da Computação<br />
                            <span className='text-lg normal-case font-bold'>Universidade Federal do Ceará</span></p>
                    </div>
                    <div className='border-dashed border-l px-12'>
                        <h4 className='text-lg uppercase font-bold mb-2 text-orange'>Graduação</h4>
                        <p className='text-2xl uppercase'>Engenharia da Computação<br />
                            <span className='text-lg normal-case font-bold'>Universidade Federal do Ceará</span></p>
                    </div>
                </div>
            </div>
            <div>
            <h3 className='text-orange text-4xl text-center font-bold uppercase mt-10'>Tech Contributions</h3>
            <p className='text-center'>Github stats - <RiGitRepositoryLine className='inline-block'/> {user.public_repos} / <HiUsers className='inline-block'/> {user.followers}</p>
            <div className='grid grid-cols-3 gap-2 my-6'>
            {repos.map(repo => {
                return (
                    <div key={repo.id} className='rounded bg-white p-4 hover:shadow-md'>
                        <h3 className='font-bold hover:underline'><a href={'https://github.com/' + repo.full_name}>{repo.full_name.replace('joirneto/', '').toUpperCase()}</a></h3>
                        <h4>{repo.language}</h4>
                    </div>
                )
            })}
            </div>
            </div>
        </div>
    )
}

export async function getServerSideProps(context) {
    const { user, repos } = await getUser('joirneto');
    return {
        props: {
            user,
            repos,
        }
    }
}

export default Index;