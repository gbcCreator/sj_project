import React from 'react'
import banner from '../grocery_img-collection/saroj website img collection/banner_logo.avif'
// import SubBanner from './SubBanner'

const Banner = () => {
  return (
    <>
     <section className='banner'>
        <div className="first">
            <img src={banner} alt="loading" />
        </div>
        {/* <SubBanner/> */}
     </section> 
    </>
  )
}

export default Banner
