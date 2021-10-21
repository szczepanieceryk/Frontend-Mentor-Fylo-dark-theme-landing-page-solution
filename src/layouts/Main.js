import React from 'react'

import { useForm } from "react-hook-form";

import OurOffer from '../components/OurOffer';
import Testimonial from '../components/Testimonial';

import accessImg from '../images/icon-access-anywhere.svg';
import arrowIcon from '../images/icon-arrow.svg';
import collaborationImg from '../images/icon-collaboration.svg';
import filesImg from '../images/icon-any-file.svg';
import productiveImg from '../images/illustration-stay-productive.png';
import securityImg from '../images/icon-security.svg';

import profile1Img from '../images/profile-1.jpg'
import profile2Img from '../images/profile-2.jpg'
import profile3Img from '../images/profile-3.jpg'

import '../style/_Main.scss';

//data for our offer section to map thru
const offerData = [
    {
        id: 1,
        img: accessImg,
        title: 'Access your files, anywhere',
        text: ' The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.'
    },
    {
        id: 2,
        img: securityImg,
        title: 'Security you can trust',
        text: ' 2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.'
    },
    {
        id: 3,
        img: collaborationImg,
        title: 'Real-time collaboration',
        text: 'Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.'
    },
    {
        id: 4,
        img: filesImg,
        title: 'Store any type of file',
        text: "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared."
    }
]

const usersTestimonials = [

    {
        id: 1,
        text: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
        img: profile1Img,
        name: 'Satish Patel',
        occupation: 'Founder & CEO, Huddle',
    },
    {
        id: 2,
        text: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
        img: profile2Img,
        name: 'Bruce McKenzie',
        occupation: 'Founder & CEO, Huddle',
    },
    {
        id: 3,
        text: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
        img: profile3Img,
        name: 'Iva Boyd',
        occupation: 'Founder & CEO, Huddle',
    },
]


const Main = () => {

    const { handleSubmit, register, formState: { errors } } = useForm();

    const onSubmit = (data) => console.log(data);

    // calling map function on array to create content with OurOffer component 
    const ourOffer = offerData.map(offer => (
        <OurOffer key={offerData.id} {...offer} />
    ))

    const testimonials = usersTestimonials.map(testimonial => (
        <Testimonial key={usersTestimonials.id} {...testimonial} />
    ))

    return (
        <div className="main-wrapper">
            <div className="our-offer">
                {ourOffer}
            </div>
            <div className="stay-productive">
                <img className="productive-img" src={productiveImg} alt="" />
                <div className="productive-content">
                    <span className="title">
                        Stay productive, wherever you are
                    </span>
                    <p className="text">
                        Never let location be an issue when accessing your files. Fylo has you covered for all of your file
                        storage needs.
                    </p>
                    <br />
                    <p className="text">
                        Securely share files and folders with friends, family and colleagues for live collaboration. No email
                        attachments required.
                    </p>
                    <a href="/">
                        See how Fylo works
                    </a>
                    <img className="arrow-icon" src={arrowIcon} alt="" />
                </div>
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
                <form action="" onSubmit={handleSubmit(onSubmit)}>
                    <input type="email" className="email-input" name="email" placeholder="email@example.com" {...register('message', {
                        reguired: 'Email is required',
                        pattern: {
                            value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2-4}$/,
                            message: 'Plese enter a vaild email address'
                        },
                    })} />
                    <button className="submit" type="submit">
                        Get Started For Free
                    </button>
                    {errors.message && <p className='error-mess'>{errors.message.message}</p>}
                </form>
            </div>
        </div>
    );
}

export default Main;