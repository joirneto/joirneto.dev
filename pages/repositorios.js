import React from 'react';
import getUser from '../utils/getUser';

const Index = ({repos, user}) => {
    return (
        <div className='container mx-auto'>
            <h1 className="font-bold text-3xl">Meus repositórios Github</h1>
            <p>Github stats - public repos: {user.public_repos} / followers: {user.followers}</p>
            <a className="font-medium text-blue-600 dark:text-blue-500 hover:underline" href='/'>Home</a>
            {repos.map(repo => {
                return (
                    <div key={repo.id} className='rounded bg-gray-200 mx-8 my-4 p-4 hover:shadow-md'>
                        <h3 className='font-bold'>{repo.full_name.replace('joirneto/', '').toUpperCase()}</h3>
                        <h4>{repo.language}</h4>
                    </div>
                )
            })}
        </div>
    )
}

export async function getServerSideProps(context) {
    const {user, repos} = await getUser('joirneto');
    return {
        props: {
            user,
            repos,
        }
    }
}

export default Index;