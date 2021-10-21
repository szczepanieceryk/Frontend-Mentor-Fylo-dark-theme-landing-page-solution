import React from 'react'

import logoImg from '../images/logo.svg';
import locationIcon from '../images/icon-location.svg';
import telephoneIcon from '../images/icon-phone.svg';
import emailIcon from '../images/icon-email.svg';

import facebookIcon from '../images/logo-facebook.svg';
import twitterIcon from '../images/logo-twitter.svg';
import instagramIcon from '../images/logo-instagram.svg';

import '../style/_Footer.scss';

const Footer = () => {
    return (
        <div className="footer-wrapper">
            <img src={logoImg} alt="logo" className="logo" />
            <div className="location">
                <img src={locationIcon} alt="address pin" className="adress-icon" />
                <span className="lorem">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua
                </span>
            </div>
            <div className="contact">
                <img src={telephoneIcon} alt="" className="adress-icon" />
                <span className="phone-number">
                    +1-543-123-4567
                </span>
                <br />
                <img src={emailIcon} alt="" className="adress-icon" />
                <span className="email-adress">
                    example@fylo.com
                </span>
            </div>
            <div className="bottom-nav">
                <nav>
                    <ul>
                        <li>
                            <a href="">
                                About Us
                            </a>
                        </li>
                        <li>
                            <a href="">
                                Jobs
                            </a>
                        </li>
                        <li>
                            <a href="">
                                Press
                            </a>
                        </li>
                        <li>
                            <a href="">
                                Blog
                            </a>
                        </li>
                        <br />
                        <li>
                            <a href="">
                                Contact Us
                            </a>
                        </li>
                        <li>
                            <a href="">
                                Terms
                            </a>
                        </li>
                        <li>
                            <a href="">
                                Privacy
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="social-media-links">
                <img src={facebookIcon} alt="facebook logo" className="social-icons" />
                <img src={twitterIcon} alt="twitter logo" className="social-icons" />
                <img src={instagramIcon} alt="instagram logo" className="social-icons" />
            </div>
            <p class="attribution">
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
                Coded by <a href="#">Your Name Here</a>.
            </p>
        </div>
    );
}

export default Footer;