import React from 'react'

import accessImg from '../images/icon-access-anywhere.svg';
import securityImg from '../images/icon-security.svg';
import collaborationyImg from '../images/icon-collaboration.svg';
import fileseImg from '../images/icon-any-file.svg';

import profile1Img from '../images/profile-1.jpg'
import profile2Img from '../images/profile-2.jpg'
import profile3Img from '../images/profile-3.jpg'

import productiveImg from '../images/illustration-stay-productive.png';

import arrowIcon from '../images/icon-arrow.svg';

import '../style/_Main.scss'
import Testimonial from '../components/Testimonial';

const usersTestimonials = [

    {
        id: 1,
        text: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
        imgUrl: '../images/profile-1.jpg',
        name: 'Satish Patel',
        occupation: 'Founder & CEO, Huddle',
    },
    {
        id: 2,
        text: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
        imgUrl: '../images/profile-2.jpg',
        name: 'Bruce McKenzie',
        occupation: 'Founder & CEO, Huddle',
    },
    {
        id: 3,
        text: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
        imgUrl: '../images/profile-3.jpg',
        name: 'Iva Boyd',
        occupation: 'Founder & CEO, Huddle',
    },
]


const Main = () => {

    const testimonials = usersTestimonials.map(testimonial => (
        <Testimonial key={usersTestimonials.id} {...testimonial} />
    ))
    return (
        <div className="main-wrapper">
            <div className="our-offer">
                <div className="single-offer">
                    <img src={accessImg} alt="" />
                    <span className="title">
                        Access your files, anywhere
                    </span>
                    <p className="text">
                        The ability to use a smartphone, tablet, or computer to access your account means your
                        files follow you everywhere.
                    </p>
                </div>
                <div className="single-offer">
                    <img src={securityImg} alt="" />
                    <span className="title">
                        Security you can trust
                    </span>
                    <p className="text">
                        2-factor authentication and user-controlled encryption are just a couple of the security
                        features we allow to help secure your files.
                    </p>
                </div>
                <div className="single-offer">
                    <img src={collaborationyImg} alt="" />
                    <span className="title">
                        Real-time collaboration
                    </span>
                    <p className="text">
                        Securely share files and folders with friends, family and colleagues for live collaboration.
                        No email attachments required.
                    </p>
                </div>
                <div className="single-offer">
                    <img src={fileseImg} alt="" />
                    <span className="title">
                        Store any type of file
                    </span>
                    <p className="text">
                        Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all
                        file types to be securely stored and shared.
                    </p>
                </div>
            </div>
            <div className="stay-productive">
                <img className="productive-img" src={productiveImg} alt="" />
                <span className="title">
                    Stay productive, wherever you are
                </span>
                <p className="text">
                    Never let location be an issue when accessing your files. Fylo has you covered for all of your file
                    storage needs.
                </p>
                <p className="text">
                    Securely share files and folders with friends, family and colleagues for live collaboration. No email
                    attachments required.
                </p>
                <a href="#">
                    See how Fylo works
                </a>
                <img className="arrow-icon" src={arrowIcon} alt="" />
            </div>
            <div className="testimonials-wrapper">
                {testimonials}
            </div>
            <div className="sign-up">
                <span className="title">
                    Get early access today
                </span>
                <span className="text">
                    It only takes a minute to sign up and our free starter tier is extremely generous. If you have any
                    questions, our support team would be happy to help you.
                </span>
                <form action="">
                    <input type="text" />
                    <button className="submit">
                        Get Started For Free
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Main;