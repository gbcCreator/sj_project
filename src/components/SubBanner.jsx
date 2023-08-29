import React from 'react'
import { NavLink } from 'react-router-dom'

const SubBanner = () => {
    return (
        <>
            <section className='sub-banner'>
                <div className="sub-banner-contain">
                    <h3>May you always be each other's side in good times and bad.Wishing you a very happy Raksha Bandhan! Rakhi hampers now available</h3>
                    <div className="btn">
                        <NavLink to="/">shop now</NavLink>
                    </div>
                </div>
            </section>
        </>
    )
}

const OverlayBox = (props) => {
    return (
        <>
            <div className="box_container">
                <div className="overlay-box">
                    <h3>{props.overaly_heading}</h3>
                    <div className="btn">
                        <NavLink to="/">Browse Social</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SubBanner
export { OverlayBox };
