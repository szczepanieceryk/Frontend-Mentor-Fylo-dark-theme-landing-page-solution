import React from 'react'

const Testimonial = ({ text, imgUrl, name, occupation }) => {
    return (
        <>
            <p className="text">
                {text}
            </p>
            <img src={imgUrl} alt="" />
            <span>
                {name}
                {occupation}
            </span>
        </>
    );
}

export default Testimonial;