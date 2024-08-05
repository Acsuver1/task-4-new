import React from 'react'
import './email.css'
import {Link} from 'react-router-dom'

const Email = () => {
  return (
    <div className='email'>
        <div className='container'>
            <div className='email__wrapper'>
                <div className='email__text'>
                    <p>STAY UPTO DATE ABOUT <br /> OUR LATEST OFFERS</p>
                </div>
                <div className='email__input'>
                    <input type="text" placeholder='Your Email' />
                  <Link to="/sign"><button>Sign Up</button></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Email