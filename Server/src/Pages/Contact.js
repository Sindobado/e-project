import React from 'react';
import '../index.css';
import Navigation from './Navigation';


const Contact = () => {
    return(
        <div>
            <Navigation />
            <h2>Contact Us</h2>
            <p>For any inquiries or questions, please contact us at:</p>
            <ul>
                <li>Email: info@example.com</li>
                <li>Phone: +1 (555) 555-5555</li>
            </ul>
        </div>
    )
}
export default Contact;

