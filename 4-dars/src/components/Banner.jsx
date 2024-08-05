import React from 'react'
import banner from '../assets/banner.png'
import './banner.css'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <div className='banner'>
      <div className='container'>
       <div className='banner__wrapper'>
        <div className='banner__text'>
            <h4>FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE</h4>
            <p>Browse through our diverse range of meticulously crafted garments, designed <br /> to bring out your individuality and cater to your sense of style.</p>
           <Link to="/sign"> <button className='banner__btn'>Shop Now</button></Link>
          <div className='banner__add-wrap'>
            <div className='banner__add'>
                <p>200+</p>
                <span>International Brands</span>
              </div>
              <div className='banner__add'>
                <p>2,000+</p>
                <span>High-Quality Products</span>
              </div>
              <div className='banner__add'>
                <p>30,000+</p>
                <span>Happy Customers</span>
              </div>
          </div>
          </div>
          <div className='banner__img'>
            <img src={banner} alt="" />
          </div>
       </div>
      </div>
    </div>
  )
}

export default Banner