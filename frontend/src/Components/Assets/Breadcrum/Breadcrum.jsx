import React from 'react'
import './Breadcrum.css'
import arrowicon from '../arrowimage.png'

const Breadcrum = (props) => {
    const {product} = props;
  return (
    <div className='breadcrum'>
      HOME <img src={arrowicon} alt="" /> SHOP <img src={arrowicon} alt="" /> {product.category} <img src={arrowicon} alt="" /> {product.name}
    </div>
  )
}

export default Breadcrum
