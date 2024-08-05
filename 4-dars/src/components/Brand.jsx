import React from 'react'
import './brand.css'
import versage from '../assets/versage.svg'
import zara from '../assets/zara.svg'
import gucci from '../assets/gucci.svg'
import prada from '../assets/prada.svg'
import calvin from '../assets/calvin.svg'
const Brand = () => {
  return (
    <div className='brand'>
        <div className='container'>
            <div className='brand__wrapper'>
                <img src={versage} alt="" />
                <img src={zara} alt="" />
                <img src={gucci} alt="" />
                <img src={prada} alt="" />
                <img src={calvin} alt="" />
            </div>
        </div>
    </div>

  )
}

export default Brand