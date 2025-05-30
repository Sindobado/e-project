
import React from 'react';
import '../index.css';
import Navigation from './Navigation';
import photo from './resources/ChatGPT Image May 25, 2025, 08_55_20 PM.png';

const About = () => {
    return(
        <div className="about">
            <img src={photo} alt='Home Page Image' />
            <div className='about-text'>
                <h1>Our vision</h1>
                <p>At Eco Clothes, we envision a world where fashion and sustainability coexist harmoniously. Our mission is to revolutionize the clothing industry by offering stylish, eco-friendly apparel that empowers individuals to make conscious choices without compromising on quality or aesthetics.</p>
            </div>
        </div>
    )
}

export default About;


