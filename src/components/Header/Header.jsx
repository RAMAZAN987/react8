import React from 'react'
import '../Header/Header.css'
import { Link } from 'react-router-dom';
function Header() {

    return (
      <div className="header">
        <div className="container">
                <Link to="home" className='header_link_item'>&#9883;</Link>
                <div className="header_link">
                    <Link to="home" className='header_link_item'>Home</Link>
                    <Link to="about" className="header_link_item">About</Link>
                    <Link to="mans" className="header_link_item">Mans</Link>
                    <Link to="womans" className="header_link_item">Womans</Link>
                </div>
            </div>
        </div>
    );
  }
  
  export default Header;