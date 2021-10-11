import React from 'react'

import logoImg from '../images/logo.svg';

import '../style/_TopNavigation.scss';

const TopNavigation = () => {
    return (
        <div className="top-navigation-wrapper">
            <img className="logo-img" src={logoImg} alt="logo" />
            < nav className="navigation">
                <ul>
                    <li>
                        <a href="">
                            Features
                        </a>
                    </li>
                    <li>
                        <a href="">
                            Team
                        </a>
                    </li>
                    <li>
                        <a href="">
                            Sign In
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default TopNavigation;