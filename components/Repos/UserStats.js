import React from "react";
import { RiGitRepositoryLine } from "react-icons/ri";
import { FiUsers } from "react-icons/fi";

const UserStats = ({ user }) => {
    return (
        <p className='text-center'>
            Github stats - <RiGitRepositoryLine className='inline-block' /> {user.public_repos} / <FiUsers className='inline-block' /> {user.followers}
        </p>
    )
}

export default UserStats;