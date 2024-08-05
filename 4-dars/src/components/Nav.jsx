import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'
import shop from '../assets/shop.svg'
import user from '../assets/user.svg'

const Nav = (  ) => {
  return (
    <div>
    <div className="top-banner">
      <p>Sign up and get 20% off to your first order. <Link to="/sign">Sign Up Now</Link></p>
      <span className="close-banner">&times;</span>
    </div>

   <div className= "container">
   <nav className="main-nav">
      <div className="logo">
        <Link className="logo-link" to="/"> <h1>SHOP.CO</h1></Link>
      </div>
      <ul className="nav-links">
        <li><a className='active__link' href="#brands2">Shop</a></li>
        <li><a className='active__link' href="/">On Sale</a></li>
        <li><a className='active__link' href="/">New Arrivals</a></li>
        <li><a className='active__link' href=" #brands ">Brands</a></li>
        <li><Link className='active__link' to="/about">Contact</Link></li>
      </ul>
      <div className="search-container">
        <input type="text" placeholder="Search for products..." />
        <button type="submit"><i className="fa fa-search"></i></button>
      </div>
      <div className="nav-icons">
       <Link to="/"> <img src={shop} alt="" /></Link>
       <Link to="/about"> <img src={user} alt="" />   </Link>
      
      </div>
    </nav>
   </div>
  </div>
  )
}

export default Nav
