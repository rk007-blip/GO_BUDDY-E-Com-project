import React from 'react'

const Subfooter = () => {
const year = new Date();
  return (
    <div className='text-center font-serif bg-slate-400 '> &copy; 2002 - {year.getFullYear()} Gobuddy.com, Inc. or its affiliates
      <a className='gap-6' href='#'>  Terms and Conditions</a>
    </div>
  )
}

export default Subfooter