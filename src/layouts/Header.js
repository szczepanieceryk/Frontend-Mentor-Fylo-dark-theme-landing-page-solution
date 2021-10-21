import React from 'react'

import headerImg from '../images/illustration-intro.png';

import '../style/_Header.scss';

const Header = () => {
    return (
        <div className="header-wrapper">
            <img className="header-img" src={headerImg} alt="" />
            <span className="banner">
                All your files in one secure location, accessible anywhere.
            </span>
            <span className="text">
                Fylo stores all your most important files in one secure location. Access them wherever
                you need, share and collaborate with friends family, and co-workers.
            </span>
            <button className="get-started-btn">
                Get Started
            </button>
        </div>
    );
}

export default Header;