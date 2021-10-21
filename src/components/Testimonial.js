import React from 'react'

const Testimonial = ({ text, img, name, occupation }) => {
    return (
        <div className="sinlge-testimonial">
            <p className="text">
                {text}
            </p>
            <img src={img} alt="user thumbnail" className="user-image" />
            <span>
                <strong>{name}</strong>
                {occupation}
            </span>
        </div>
    );
}

export default Testimonial;