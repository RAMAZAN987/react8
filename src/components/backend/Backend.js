import React from 'react'
import Icon1 from '../assets/icon2.jpeg'
import Icon2 from '../assets/icon3.jpeg'
import Icon3 from '../assets/icon4.jpeg'
import Womans from '../Womans/Womans'

function Backend() {
    const womans = [
        {
            image: Icon1,
            name: 'Платье',
            price: '100'
        },
        {
            image: Icon2,
            name: 'Платье',
            price: '150'
        },
        {
            image: Icon3,
            name: 'Платье',
            price: '200'
        }
    ]
  return (
    <div className='Backend'>
      <Womans womans = {womans} />
    </div>
  )
}

export default Backend
