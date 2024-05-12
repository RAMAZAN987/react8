import React from 'react'

function Womans(props) {
  const {image, name, price} = props.womans
  return (
    <div className='main_cart-block'>
      <div className="cart-block">
        <div className="img">{image}</div>
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <div className="cart-block"></div>  
      <div className="cart-block"></div>
    </div>
  )
}

export default Womans
