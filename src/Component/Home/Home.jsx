import React from 'react'
import Navbar from '../Header/Navbar'
import Footer from '../Footer/Footer'
import Sub_navbar from '../Sub_navbar/Sub_navbar'
import Slider from '../Slider/Slider'
import ProductSection from '../Product_section/Product'
import Subfooter from '../Footer/subfooter'


const Home = () => {
  return (<>
    <Navbar />
    <Sub_navbar/>
    <Slider />
    <ProductSection/>
    <Footer />
    <Subfooter />
    </>
  )
}

export default Home