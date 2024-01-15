import React from "react";

const Repo = ({ repo }) => {
    return (
        <div className='rounded bg-white p-4 hover:shadow-md my-3 lg:my-0'>
            <h3 className='font-bold hover:underline'><a href={'https://github.com/' + repo.full_name}>{repo.full_name.replace('joirneto/', '').toUpperCase()}</a></h3>
            <h4>{repo.language}</h4>
        </div>
    )
}

export default Repo;