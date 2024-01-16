import React from 'react';
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
    const API_URL = process.env.API_URL;
    const request = await fetch(`${API_URL}/api/getUser`);
    const { user, repos } = await request.json();
    return {
        props: {
            user,
            repos,
        }
    }
}

export default Index;