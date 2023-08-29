import React from 'react'
import { NavLink } from 'react-router-dom'
// import { HashLink } from 'react-router-hash-link'
import '../styles/CardStyle.css'
import first from '../grocery_img-collection/saroj website img collection/card_img/1.avif'

const CardSection = (props) => {
  return (
    <>
      <div className="card_container">
        <div className="card_img">
            <img src={props.img} alt={props.img_alt} />
        </div>
        <div className="card_contain">
            <h4>{props.card_heading}</h4>
            <h5>{props.card_price}</h5>
        </div>
        <div className="btn-order">
            <NavLink to={'#order'}  className='order-now'>order now</NavLink>
            {/* <NavLink to={'/'}></NavLink> */}
        </div>
      </div>
    </>
  )
}

export default CardSection
