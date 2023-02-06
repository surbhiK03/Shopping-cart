import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css'; 


 const Header = () => {
  return (
    <div>
        <header className='header'>
            <div>
                <h1 className='logo'>
                Shopping Cart
                </h1>
            </div>
            <div className='header-links'>
                <ul>
                    <li>
                    <Link to="/" >Home</Link>
                    </li>

                </ul>
                <ul>
                    <li>
                    <Link to="/cart" className='cart'>Cart</Link>
                   
                    </li>
                    
                </ul>
            </div>
        </header>
    </div>
  )
}
export default Header;