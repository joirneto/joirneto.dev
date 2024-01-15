import React from "react";
import Repo from "./Repo";
import UserStats from "./UserStats";
const Repos = ({repos, user}) => {
    return (
        <div>
            <h3 className='text-orange lg:text-4xl text-3xl text-center font-bold uppercase mt-10'>Tech Contributions</h3>
            <UserStats user={user} />
            <div className='lg:grid lg:grid-cols-3 lg:gap-2 lg:my-6'>
                {repos.map(repo => {
                    <Repo key={repo.id} repo={repo}/>
                })}
            </div>
        </div>
    )
}

export default Repos;