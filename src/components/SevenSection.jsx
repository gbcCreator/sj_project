import React from 'react'

const SevenSection = (prps) => {
  return (
    <>
     <div className="seven-section-contain">
        <img src={prps.logo_img} alt="loading" />
        <h3>{prps.logo_heading}</h3>
        <p>{prps.heading_contain}</p>
      </div> 
    </>
  )
}

export default SevenSection
