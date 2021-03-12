import React from 'react';
import Features from '../components/Features';
import Heroes from '../components/Hero';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HtmlHead from '../components/HtmlHead';


const Home = () => {
    return (
        <div className="container">
            <HtmlHead title="GitFeatures: Fueling Behavior-Driven Development" description="A Behavior-Driven Development (BDD) specification writing tool." />

            <main>
                <Navbar />
                <Heroes/>
                <Features />
                <Footer />
            </main>
        </div>
    );
};

export default Home;