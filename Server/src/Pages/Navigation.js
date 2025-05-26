import React from 'react';
import { BrowserRouter as Router, Routes,Route,Link } from 'react-router-dom';
import '../index.css';
import logo from './resources/Frame 1 (1).svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
    return (
      <div id='Navigation'>
        <nav>
            <div className='logo-container'>
                <img src={logo} alt="Logo" className='logo' />
                <h2>Eco Clothes</h2>
            </div>
            <div>
                <ul>
                    <li><Link to="/" >Home</Link></li>
                    <li><Link to="/shop" >Shop</Link></li>
                    <li><Link to="/about" >About</Link></li>
                    <li><Link to="/contact" >Contact</Link></li>
                </ul>
            </div>
            <div className='icon-container'>
                <FontAwesomeIcon icon={faMagnifyingGlass} className='search-icon' />
                <FontAwesomeIcon icon={faHeart} className='heart-icon' />
                <FontAwesomeIcon icon={faShoppingCart} className='cart-icon' />
                <FontAwesomeIcon icon={faUser} className='user-icon' />
            </div>
        </nav>

      </div>
    );
  };
  
export default Navigation;

