import React from 'react'

import headerImg from '../images/illustration-intro.png';

import '../style/_Header.scss';

const Header = () => {
    return (
        <div className="header-wrapper">
            <img className="header-img" src={headerImg} alt="" />
            <span className="title">
                All your files in one secure location, accessible anywhere.
            </span>
            <p className="text">
                Fylo stores all your most important files in one secure location. Access them wherever
                you need, share and collaborate with friends family, and co-workers.
            </p>
            <button className="get-started-btn">
                Get Started
            </button>
        </div>
    );
}

export default Header;