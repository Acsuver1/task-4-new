import React from 'react'
import './dress.css'
import dres1 from '../assets/dres1.png'
import dres2 from '../assets/dres2.png'
import dres3 from '../assets/dres3.png'
import dres4 from '../assets/dres4.png'

const Dress = () => {
  return (
    <>
    <div className='dress'>
        <div className='container'>
            <div className='dress__wrapper'>
                <div className='dress__text1'>
                     <h4 className='text__dress'>BROWSE BY DRESS STYLE</h4>
                </div>
                <div className='dress__img'>
                <img  src={dres1} alt="" />
                <img src={dres2} alt="" />
                <img src={dres3} alt="" />
                <img src={dres4} alt="" />
             </div>
             </div>
        </div>
    </div>
    </>
  )
}

export default Dress