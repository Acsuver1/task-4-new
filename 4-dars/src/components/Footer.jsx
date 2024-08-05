import React from 'react'
import './footer.css'
import mail from '../assets/mail.svg'
import insta from '../assets/insta.svg'
import linked from '../assets/linked.svg'
import locat from '../assets/locat.svg'
import be from '../assets/be.svg'

const Footer = () => {
  return (
    <div className='footer'>

        <div className='container'>
            <div className='footer__wrapper'>   
                <div className='footer__text'>
                    <h5>SHOP.CO</h5>
                    <p>We have clothes that suits your style and <br /> which you’re proud to wear. From <br /> women to men.</p>
                    <div className='footer__img'>
                        <img src={mail}  alt="" />
                        <img src={insta}  alt="" />
                        <img src={linked}  alt="" />
                        <img src={locat}  alt="" />
                        <img src={be} alt="" />
                    </div>
                </div>
                <div className='footer__text'>
                    <h3>Company</h3>   
                    <p>About</p>
                    <p>Features</p>
                    <p>Works</p>
                    <p>Career</p>
                </div>  
                <div className='footer__text'>
                    <h3>Help</h3>
                    <p>Customer Support</p>
                    <p>Delivery Details</p>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                </div>
                <div className='footer__text'>
                    <h3>FAQ</h3>
                    <p>Account</p>
                    <p>Manage Deliveries</p>
                    <p>Orders</p>
                    <p>Payments</p>
                </div>
                <div className='footer__text'>
                    <h3>Resources</h3>
                    <p>Free eBooks</p>
                    <p>Development Tutorial</p>
                    <p>How to - Blog</p>
                    <p>Youtube Playlist</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer