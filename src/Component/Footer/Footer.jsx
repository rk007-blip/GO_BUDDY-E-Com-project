import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import './Footer.css'

const Footer = () => {
  return (
    <div className=' font-serif pt-7 bg-slate-300'>
      <div className='pl-3 pr-4'>
        <h1 className='font-semibold pb-3'>About Us:</h1>
        <p>Go Buddy INDIA PRIVATE LIMITED's Corporate Identification Number (CIN) is U51909KA2011PTC060489. You can contact them by sending an email to neeraj.jain@flipkart.com or visit them at their registered address Vaishnavi Summit, Ground Floor, 7th Main, 80 Feet Road, 3rd Block, Koramangala Industrial Layout, Bangalore KA IN 560034.
        </p>
         <p className='pt-2 font-serif'>
        Go Buddy INDIA PRIVATE LIMITED is a Private incorporated on 19-09-2011. It is classified as a Non-govt company and is registered at RoC-Bangalore. Their state of registration is Karnataka. Its authorized share capital is 10000000.00 and its paid-up capital is 7276968.00.
         </p>
        </div>
      
      <div className='flex ml-6'>
        <div >
         <h2 className='pt-4 pl-7 font- font-semibold'>Simplify your gifting experience with our app. </h2>
         <div className='flex w-36 ml-16'>
          <img src='qrcode.svg 'className=''/>
          <img src='appstore.svg'/>
         </div>
        </div>
         <div className='pl-36'>
          <h2 className='pt-4 pb-4 font-semibold'>Social Media:</h2>
           <div className='flex'>
            <a href='#' className='text-5xl pr-5 ml-5 flex '><FaFacebook /></a>
            <a href='#' className='text-5xl flex'><FaSquareInstagram /></a>
            <a href='#' className='text-5xl px-5 flex'><FaSquareXTwitter /></a>
            <a href='#' className='text-5xl flex '><FaYoutube /></a>
           </div>
        </div>
      </div>
     </div>
  
  )
}

export default Footer