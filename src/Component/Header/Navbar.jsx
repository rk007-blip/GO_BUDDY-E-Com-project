import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { CiGift } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import { VscAccount } from "react-icons/vsc";
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className='flex w-full bg-slate-100 text-[#003049] font-medium '>
      <img src='go.png'alt='logo' className='h-14 mt-2 pt-5 rounded-lg'/>
      <div className='pl-11 pt-6'>
      <h4 >Deliver to loction</h4>
      </div>
      <div className='my-5 ml-9 mr-2 flex'>
      <div><input type="text"placeholder='search products' className='pl-1 py-2 pr-24  '/></div>
      <div className='text-2xl pt-2'><IoIosSearch/></div>
      </div>
     
     <div className='pl-80 pt-7  '>
      <span className=' text-lg '><CiGift /></span >
      <p > Gift Finder</p>
      </div>
      <Link to='/Cart'> 
      <div className='pl-7 pt-7'>
      <span><MdOutlineShoppingCart/></span>
      <p className=''>Cart</p>
      </div></Link>
      <Link to='/signin'><p className='pl-11'><span  className='pl-6'><VscAccount /></span>Sign in</p></Link>
    </nav>
  )
}

export default Navbar