import React from 'react'

const Sub_navbar = () => {
  return (
    <div className='flex m-4 font-semibold gap-x-10 text-center'>
        <div className='text-[#003049] pl-5'><img src='mobile1.jpg' alt='img1' className='w-24 rounded-3xl '/><h4>Mobile</h4></div>
        <div className=' text-[#003049]'><img src='laptop.jpeg'alt='img1' className='w-24 rounded-3xl'/><h4>Laptops</h4></div>
        <div className='  text-[#003049]'><img src='elect.jpg'alt='img1' className='w-24 rounded-3xl'/><h4 className='pt-1'>Electronics</h4></div>
        <div className='  text-[#003049]'><img src='furniture.webp'alt='img1' className='w-28 rounded-3xl'/><h4 className='pt-2'>Home & Furniture</h4></div>
        <div className='  text-[#003049]'><img src='fasion.webp'alt='img1' className='w-28 rounded-3xl'/><h4>Fashion</h4></div>
        <div className='  text-[#003049]'><img src='grocery.webp'alt='img1' className='w-24 rounded-3xl'/><h4>Grocery</h4></div>
        <div className='  text-[#003049]'><img src='vechical1.png'alt='img1' className='w-28 rounded-3xl'/><h4>Vehical</h4></div>
        <div className=' text-[#003049]'><img src='toys.jpeg'alt='img1' className='w-24 h-24'/><h4>Toys & More</h4></div>
        <div className=' text-[#003049]'><img src='equipments.jpg'alt='img' className='w-20 pl-4 rounded-3xl '/><h4>Sports & Fitness</h4></div>
    </div>
  )
}

export default Sub_navbar