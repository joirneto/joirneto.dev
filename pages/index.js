import React from 'react';
import getUser from '../utils/getUser';
import PageHead from '../components/PageHead';
import Hero from '../components/Hero';
import Summary from '../components/Summary';
import Education from '../components/Education';
import Footer from '../components/Footer';
import Repos from '../components/Repos';

const Index = ({ user, repos }) => {
    return (
        <div className='container mx-auto bg-betwork'>
            <PageHead/>
            <Hero/>
            <Summary/>
            <Education/>
            <Repos user={user} repos={repos}/>
            <Footer/>
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