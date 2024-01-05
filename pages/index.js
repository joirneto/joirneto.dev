import React from 'react';
import Head from 'next/head';
import getUser from '../utils/getUser';
import { FaLinkedin, FaGithub, } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { SiGmail } from "react-icons/si";
import { RiGitRepositoryLine } from "react-icons/ri";
import { HiUsers } from "react-icons/hi2";

const Index = ({ user, repos }) => {
    return (
        <div className='container mx-auto'>
            <Head>
                <title>
                    Joir Neto - Software Engineer
                </title>
                <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png"/>
                <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png"/>
                <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png"/>
                <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png"/>
                <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png"/>
                <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png"/>
                <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png"/>
                <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png"/>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png"/>
                <link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                <link rel="manifest" href="/manifest.json"/>
                <meta name="msapplication-TileColor" content="#ffffff"/>
                <meta name="msapplication-TileImage" content="/ms-icon-144x144.png"/>
                <meta name="theme-color" content="#ffffff"/>
            </Head>
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
                <p className='text-center'>Github stats - <RiGitRepositoryLine className='inline-block' /> {user.public_repos} / <HiUsers className='inline-block' /> {user.followers}</p>
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
            <div>
                <p className='text-center my-8 py-4 border-t-2'>
                    You can find the source-code of this website:
                    <br/>
                    <a href='https://github.com/joirneto/joirneto.dev'>https://github.com/joirneto/joirneto.dev</a>
                    </p>
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