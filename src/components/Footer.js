import React from 'react'

const Footer = () => {
    let footerstyle={
        border: '2px solid red',
        marginBottom: 0
    }
  return (
    <footer className='bg-dark text-light '>
      <p className='text-center py-2' style={footerstyle}>copyrights &copy; www.MyworkList.com</p>
    </footer>
  )
}

export default Footer
