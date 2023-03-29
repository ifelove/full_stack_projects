import React from 'react'
const year=new Date().getFullYear()
console.log(year)

const Footer = () => {
  return (
    <div className='footer'>
      <p>All Right Reserved {year} @SirLoveth</p>
    </div>
  )
}

export default Footer


