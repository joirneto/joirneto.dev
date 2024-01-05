import React from 'react';
import getUser from '../utils/getUser';
import { RiGitRepositoryLine } from "react-icons/ri";
import { HiUsers } from "react-icons/hi2";
import PageHead from '../components/PageHead';
import Hero from '../components/Hero';

const Index = ({ user, repos }) => {
    return (
        <div className='container mx-auto bg-betwork'>
            <PageHead/>
            <Hero/>
            <div className='bg-white roudend-lg shadow-lg py-12 px-8 mx-8 lg:px-16'>
                <h3 className='text-4xl text-center text-orange'> What I do</h3>
                <p className='text-2xl '>BACKEND DEVELOPER JS</p>
                <p className='text-2xl'>AWS CLOULD</p>
            </div>
            <div>
                <h3 className='text-orange text-4xl text-center font-bold uppercase mt-10 mb-5'>My Education</h3>
                <div className='mx-8 lg:grid lg:grid-cols-2 leading-none bg-white roudend-lg shadow-lg py-6'>
                    <div className='border-dashed border-t lg:border-l lg:border-t-0 mx-6 px-6 lg:px-12 py-6'>
                        <h4 className='text-lg uppercase font-bold mb-2 text-orange'>Graduação</h4>
                        <p className='text-2xl uppercase'>Engenharia da Computação<br />
                            <span className='text-lg normal-case font-bold'>Universidade Federal do Ceará</span></p>
                    </div>
                    <div className='border-dashed border-t lg:border-l lg:border-t-0 mx-6 px-6 lg:px-12 py-6'>
                        <h4 className='text-lg uppercase font-bold mb-2 text-orange'>Graduação</h4>
                        <p className='text-2xl uppercase'>Engenharia da Computação<br />
                            <span className='text-lg normal-case font-bold'>Universidade Federal do Ceará</span></p>
                    </div>
                </div>
            </div>
            <div>
                <h3 className='text-orange lg:text-4xl text-3xl text-center font-bold uppercase mt-10'>Tech Contributions</h3>
                <p className='text-center'>Github stats - <RiGitRepositoryLine className='inline-block' /> {user.public_repos} / <HiUsers className='inline-block' /> {user.followers}</p>
                <div className='lg:grid lg:grid-cols-3 lg:gap-2 lg:my-6'>
                    {repos.map(repo => {
                        return (
                            <div key={repo.id} className='rounded bg-white p-4 hover:shadow-md my-3 lg:my-0'>
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