import React, { useEffect, useState } from 'react'
import "./Massenge.css"
import rating from '../assets/rating.svg'
import prem from '../assets/prem.svg'


const Comments= () => {
    const [comments, setComments] = useState([]);

 useEffect(() => {
  fetch('https://dummyjson.com/comments '  )
    .then((res) => res.json())
    .then((data) => setComments(data.comments));
}, []);
 
  return (
 <>
    <div>
   <h1 className='our'>OUR HAPPY CUSTOMERS</h1>
      </div>
    <div className='commit'>
     
     {
      comments.slice(10,13).map((comments) => (
        <div className='commit-cards'  key={comments.id}>
         <img src={rating} alt="" />
         <h1 className='name'>Ahror Amonov</h1>
         <p>{comments.email}</p>
         <img src={prem} alt="" />
          <p>{comments.body}</p>
          
          

        </div>
      ))
     }
     
    </div>
 </>
  )
}

export default Comments