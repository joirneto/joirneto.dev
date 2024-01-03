import React from 'react';
import getUser from '../utils/getUser';

const Index = ({user}) => {
    return (
        <div className='container mx-auto'>
            <h2 className="font-bold text-5xl">Olá! Eu sou Joir Neto</h2>
            <h2 className="font-bold text-3xl">Meu github</h2>
            <p>Github stats - public repos: {user.public_repos} / followers: {user.followers}</p>
            <a className="font-medium text-blue-600 dark:text-blue-500 hover:underline" href='/repositorios'>Repositórios</a>
        </div>
    )
}

export async function getServerSideProps(context) {
    const {user} = await getUser('joirneto');
    return {
        props: {
            user,
        }
    }
}

export default Index;