import React from 'react'

const ThirdSection = (prps) => {
  return (
    <>
      <div className="third-section-contain">
        <img src={prps.logo_img} alt="loading" />
        <h3>{prps.logo_contain}</h3>
      </div>
    </>
  )
}

export default ThirdSection
