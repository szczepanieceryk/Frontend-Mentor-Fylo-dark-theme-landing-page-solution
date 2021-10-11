import React from 'react'

import Footer from '../layouts/Footer';
import Header from '../layouts/Header';
import Main from '../layouts/Main';
import TopNavigation from '../layouts/TopNavigation';

import '../style/_HomePage.scss';

const HomePage = () => {
    return (
        <div className="home-page-wrapper">
            <TopNavigation />
            <Header />
            <Main />
            <Footer />
        </div>
    );
}

export default HomePage;