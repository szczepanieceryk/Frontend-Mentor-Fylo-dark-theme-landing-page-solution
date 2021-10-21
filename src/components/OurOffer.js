import React from 'react';

const OurOffer = ({ img, title, text }) => {
    return (
        <div className="single-offer">
            <img src={img} alt="" />
            <span className="title">
                {title}
            </span>
            <p className="text">
                {text}
            </p>
        </div>
    );
}

export default OurOffer;